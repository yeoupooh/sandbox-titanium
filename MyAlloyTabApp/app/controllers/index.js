$.index.open();

function onClickButton1(e) {
	Titanium.API.info("You clicked the button");
};

function onClickButton2(e) {
	Titanium.API.info("Test2");
};

var elementData = [
	{"name":"Hydrogen" },
	{"name":"Helium" },
	{"name":"Lithium" },
	{"name":"Beryllium" },
	{"name":"Boron"	},
	{"name":"Carbon" },
	{"name":"Nitrogen"},
	{"name":"Titanium.API.info(\"Test2\");"}
];
var items = _.map(elementData, function(element) {
 return {
		properties: {
			title: element.name
		}
	};
});


function onItemClickList1(e) {
	//Ti.API.infe(e.toString());
}
