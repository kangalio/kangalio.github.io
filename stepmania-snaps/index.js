var max_length = Infinity;

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

function refill_table() {
	var tbody = document.getElementById("approximations-tbody");
	tbody.innerHTML = "";
	
	for (var snap = 1; snap <= 192; snap++) {
		var intervals = calc_intervals(snap);
		if (intervals.length > max_length) continue;
		
		var spacings_str = intervals.join("-\u200B");
		var bpm = Math.round(16 / snap * 200);
		
		var table_row = document.createElement("tr");
		table_row.innerHTML = "<td>" + snap + "</td><td>" + spacings_str + "</td><td>" + bpm + "</td>";
		tbody.appendChild(table_row);
	}
}

function update_length_filter(value) {
	max_length = value;
	refill_table();
}
