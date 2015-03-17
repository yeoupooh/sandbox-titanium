function doClick(e) {
	alert($.label.text);
}

function showmenu(e) {
	$.main.animate({
		left : 200,
		duration : 100
	});
}

function hidemenu(e) {
	$.main.animate({
		left : 0,
		duration : 100
	});
}

$.index.open();

var row = Ti.UI.createTableViewRow({
	id : 'listRow'
});

var view = Ti.UI.createView({
	id : 'rowContainer'
});

var statusLabel = Ti.UI.createLabel({
	id : 'status',
	text : 'Feeling good'
});

view.add(statusLabel);
row.add(view);

$.mainList.appendRow(row);

// Ti.UI.info('row=' + $.mainList);


