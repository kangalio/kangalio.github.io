window.snaps = undefined;
window.bpm_column_enabled = true;
window.separator = " ";
window.export_file = null;

function calc_intervals(snap) {
	var lengths = [];
    
    var carry = 0;
    while (true) {
        var length = 192 / snap + carry;
        var rounded = Math.ceil(length - 1e-5);
        
        lengths.push(rounded);
        
        carry = length - rounded;
        if (Math.abs(carry) < 1e-5) return lengths;
    }
    
    return lengths;
}


// stores a compression of a sequence
class compr {
    constructor(start_a = 0, end_a = 0,
        start_b = 0, end_b = 0,
        repeated = false, count = 0) 
    {
        this.start_a = start_a;
        this.end_a = end_a;
        this.start_b = start_b;
        this.end_b = end_b;

        this.repeated = repeated;
        this.count = count;
    }
}

function digit_count(i) {
    return i.toString().length;
}

// gets the run length encoding of a sequence
function run_length_enc(start, end, s){
    if(start === end){
        return s[start].toString();
    }

    let str = s[start].toString();
    let count = 1;
    for (let i = start + 1; i <= end; i++) {
        if (s[i] == s[i - 1]) {
            count++;
        }
        else {
            if (count > 1) {
                str += 'x' + count.toString();
                count = 1;
            }
            str += ' ' + s[i].toString();
        }
    }

    if(count > 1){
        str += 'x' + count.toString();
    }

    return str;
}

// if a sequence is a repetition, returns length of repetition
// otherwise returns 0
function repeating_length(start, end, s) {
    let len = end - start + 1;
    let prefix = [];
    for (let i = 0; i < len; i++) {
        prefix.push(0);
    }

    for (let i = 1; i < len; i++) {
        let j = prefix[i - 1];
        while (j > 0 && s[start + i] !== s[start + j]) {
            j = prefix[j - 1];
        }
        if (s[start + i] == s[start + j]) {
            j++;
        }
        prefix[i] = j;
    }

    if (len % (len - prefix[len - 1]) || !prefix[len - 1]) {
        return 0;
    }
    else {
        return len - prefix[len - 1];
    }
}

// finds compressions for all subsequences of s
function compress(s) {
    
    let weights = new Array(s.length);
    let forms = new Array(s.length);

    // initialization
    for (let i = 0; i < s.length; i++) {
        weights[i] = [new Array(s.length)];
        for(let j = 0; j < s.length; j++){
            weights[i][j] = Number.MAX_SAFE_INTEGER;
        }

        forms[i] = new Array(s.length);
    }

    // goes through all possible subsequences
    for (let len = 1; len <= s.length; len++) {
        for (let i = 0; i < s.length - len + 1; i++) {
            let j = i + len - 1;
            // the subsequence is i to j (inclusive)

            // if it's a single number, we just use it
            if(i == j){
                weights[i][j] = digit_count(s[i]);
                forms[i][j] = new compr(i, j);

                if(j != s.length - 1){
                    weights[i][j]++;
                }
                continue;
            }

            // the current sequence might be a concatenation of two shorter ones,
            // so this goes through all of them and finds the smallest one
            for(let split = i + 1; split <= j; split++){
                let split_val = weights[i][split - 1] + weights[split][j];
                if(weights[i][j] > split_val){
                    weights[i][j] = split_val;
                    forms[i][j] = new compr(i, split - 1, split, j);
                }
            }

            // the current sequence might be a repetition, so we check if
            // the repetition is shorter than the concatenation found earlier
            let rep_length = repeating_length(i, j, s);
            if(rep_length > 0){
                let rep_end = i + rep_length - 1;
                let single_w = run_length_enc(i, rep_end, s).length;
                let count = len / rep_length;

                let rep_weight = 1 + single_w + digit_count(count);
                if(rep_length > 1){
                    rep_weight += 2;
                }
                if(j == s.length - 1){
                    rep_weight--;
                }
                if(weights[i][j] > rep_weight){
                    weights[i][j] = rep_weight;
                    forms[i][j] = new compr(i, rep_end, 0, 0, true, count);
                }
            }
        }
    }

    return forms;
}

// recursively forms a compressed string of the sequence
function form_string(start, end, forms, s){
    let form = forms[start][end];

    if(start == end){
        return s[start].toString();
    }

    let str = "";
    // if it's a repeating sequence, we either
    // print it with the repetition count, or
    // unfold it if it's nested
    if(form.repeated){
        let str_rep = run_length_enc(form.start_a, form.end_a, s);
        let rep_len = form.end_a - form.start_a + 1;

        // makes the string (A...)xN
        if(rep_len > 1){
            str += '(';
        }
        str += str_rep;
        if(rep_len > 1){
            str += ')';
        }
        str += 'x' + form.count.toString();
        
    }
    // otherwise, we just concatenate the two smaller sequences
    else {
        let str_a = form_string(form.start_a, form.end_a, forms, s);
        let str_b = form_string(form.start_b, form.end_b, forms, s);
        str = str_a + " " + str_b;
    }

    return str;
}

// wrapper function for compressing a sequence of intervals
function gen_short_interval_str(intervals){
	let forms = compress(intervals);
  return form_string(0, intervals.length - 1, forms, intervals, false);
}

function refill_table() {
    // Now that the table is be updated, the export link will be
    // outdated, so we hide it
    document.getElementById("export-link").style.display = "none";
    
    var max_length = document.getElementById("max-length").value;
    var target_bpm = document.getElementById("target-bpm").value;
    var shorten = document.getElementById("shorten").checked;
    
	var tbody = document.getElementById("approximations-tbody");
	tbody.innerHTML = "";
	
	for (var i in window.snaps) {
        snap = window.snaps[i];
		var intervals = calc_intervals(snap);
		if (intervals.length > max_length) continue;
		
		var spacings_str;
        if (shorten) {
            spacings_str = gen_short_interval_str(intervals);
        } else {
            spacings_str = intervals.join(window.separator);
        }
		var bpm = Math.round(target_bpm * snap / 16);
		
		var table_row = document.createElement("tr");
		table_row.innerHTML = '<td class="first-col-cell">' + snap
                + '<input title="Hide row" class="delete-button" type="image" onclick="hide_row(' + snap + ')" src="https://img.icons8.com/cotton/64/000000/delete-sign--v1.png">'
                + "</td><td>" + spacings_str + "</td>";
        if (window.bpm_column_enabled) {
            table_row.innerHTML += "<td>" + bpm + "</td>";
        }
		tbody.appendChild(table_row);
	}
}

function append_snap(snap) {
    snap = document.getElementById("snap-input").value;
    document.getElementById("snap-input").value = "";
    
    insertion_index = 0;
    window.snaps.splice(insertion_index, 0, snap)
    refill_table();
}

function hide_column(index) {
    if (index == 2) window.bpm_column_enabled = false;
    
    var table = document.getElementById("table");
    var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].children[index].style.display = "none";
    }
}

function hide_row(snap) {
    var table = document.getElementById("table");
    var rows = table.getElementsByTagName("tr");
    
    
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        
        if (parseInt(row.getElementsByTagName("td")[0].innerHTML) == snap) {
            // We need to hard-delete to keep striped styling
            row.parentNode.removeChild(row);
        }
    }
    
    var index = window.snaps.indexOf(snap)
    window.snaps.splice(index, 1);
    refill_table();
}

function collect_data() {
    var text = "";
    
    let table = document.getElementsByTagName("table")[0];
    var i = -1;
    for (let row of table.rows) {
        i += 1;
        if (i == 0) continue;
        
        let snap = row.cells[0].childNodes[0].nodeValue;
        let spacings = row.cells[1].childNodes[0].nodeValue;
        
        var line = snap + "ths:";
        let indent = " ".repeat(line.length);
        for (let spacing of spacings.split(window.separator)) {
            let addendum = " " + spacing;
            if ((line + addendum).length > 100) {
                text += "\n" + line;
                line = indent;
            }
            line += addendum;
        }
        text += "\n" + line;
    }
    
    return text;
}

function gen_export_link() {
    let link = document.getElementById("export-link");
    
    let blob = new Blob([collect_data()], {type: "text/plain"});
    if (window.export_file !== null) {
        window.URL.revokeObjectURL(window.export_file);
    }
    window.export_file = window.URL.createObjectURL(blob);
    
    link.href = window.export_file;
    link.style.display = "inline-block";
}

function setup() {
    window.snaps = [];
    for (var snap = 1; snap <= 192; snap++) {
        window.snaps.push(snap);
    }
    
    sliders = document.getElementsByTagName("input");
    for (var i = 0; i < sliders.length; i++) {
        slider = sliders[i];
        if (slider.oninput) {
            slider.oninput.apply(slider);
        }
    }
    
    table_div = document.getElementById("table")
    column_headers = table_div.getElementsByTagName("th");
    columns = table_div.getElementsByTagName("col");
    for (var i = 0; i < column_headers.length; i++) {
        // We don't want deletion buttons for the two essential columns
        if (i == 0 || i == 1) continue;
        
        column_headers[i].innerHTML += '<input title="Hide column" class="delete-button" type="image" onclick="hide_column(' + i + ')" src="https://img.icons8.com/cotton/64/000000/delete-sign--v1.png">';
    }
}
