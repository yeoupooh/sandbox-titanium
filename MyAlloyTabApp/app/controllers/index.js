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

for (var i = 0; i < 10; i++) {
	var listRow = $.UI.create('TableViewRow', {
		height : '200dp',
		selectionStyle : "NONE",
		classes : 'listRow'
	});

	var rowContainer = $.UI.create('View', {
		classes : 'rowContainer',
		borderColor : "#cacdd8",
		borderRadius : 5,
		borderWidth : 1,
		left : "5dp",
		right : "5dp",
		top : "5dp",
		bottom : "5dp",
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		backgroundColor : "#fff"
	});

	var profilePic = Ti.UI.createImageView({
		id : 'profilePic',
		width : "66",
		height : "66",
		image : "profilepic.png",
		top : "5",
		left : "5"
	});

	var profileName = $.UI.create('Label', {
		height : 30,
		width : 80,
		classes : 'profileName',
		text : 'Thomas',

		top : "5dp",
		left : "80dp",
		color : "#576b95",
		font : {
			fontSize : "16dp",
			fontWeight : "bold"
		}
	});

	var timeAgo = $.UI.create('Label', {
		classes : 'timeAgo',
		text : '1 minute ago',

		top : "25dp",
		left : "80dp",
		color : "#bbbbbb",
		font : {
			fontSize : "16dp"
		}
	});

	var statusLabel = $.UI.create('Label', {
		classes : 'status',
		text : 'Feeling good',

		width : Ti.UI.SIZE,
		left : 5,
		right : 5,
		font : {
			fontSize : "16dp"
		}

	});

	var grayLine = $.UI.create('View', {
		classes : 'grayLine',
		bottom : 51,

		backgroundColor : "#9b9d9f",
		width : Ti.UI.FILL,
		height : "1dp"
	});

	var bottomActions = $.UI.create('View', {
		classes : 'bottomActions',

		bottom : 0,
		height : "45dp",
		width : Ti.UI.FILL,
		backgroundColor : "#eff2f5"
	});

	var view = rowContainer;

	view.add(profilePic);
	view.add(profileName);
	view.add(timeAgo);
	view.add(statusLabel);
	view.add(grayLine);
	view.add(bottomActions);

	listRow.add(view);

	$.mainList.appendRow(listRow);
}

