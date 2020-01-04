window.snaps = undefined;
window.bpm_column_enabled = true;

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

function gen_short_interval_str(intervals) {
    function shorten(src) {
        var dst = [];
        
        var prev;
        var count = 1;
        var i = 0;
        var extend_string = false;
        while (i < src.length) {
            prev = src[i];
            i += 1;
            
            if (src[i] === prev) {
                count += 1;
            } else {
                var text = "" + prev;
                if (count > 1) {
                    if (text.split("-").length > 1) {
                        text = "(" + text + ")";
                    }
                    text += "[" + count + "]";
                }
                
                if (extend_string) {
                    dst[dst.length - 1] += "-" + text
                } else {
                    dst.push(text)
                }
                extend_string = !extend_string;
                
                count = 1;
            }
        }
        
        return dst;
    }
    
    // Two levels deep
    intervals = shorten(intervals);
    intervals = shorten(intervals);
    
    return intervals.join("-");
}

function refill_table() {
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
            spacings_str = intervals.join("-\u200B");
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
