$.index.open();

function onClickButton1(e) {
	Titanium.API.info("You clicked the button");
};

function onClickButton2(e) {
	Titanium.API.info("Test2");
};

var elementData = [{
	"name" : "Hydrogen"
}, {
	"name" : "Helium"
}, {
	"name" : "Lithium"
}, {
	"name" : "Beryllium"
}, {
	"name" : "Boron"
}, {
	"name" : "Carbon"
}, {
	"name" : "Nitrogen"
}, {
	"name" : "Titanium.API.info(\"Test2\");"
}];
var items = _.map(elementData, function(element) {
	return {
		properties : {
			title : element.name
		}
	};
});
$.elementsList.sections[0].setItems(items);

function onItemClickList1(e) {
	Titanium.API.info("e.sectionIndex=" + e.sectionIndex + ",e.itemIndex=" + e.itemIndex);

	// Get the section of the clicked item
	var section = $.elementsList.sections[e.sectionIndex];
	// Get the clicked item from that section
	var item = section.getItemAt(e.itemIndex);
	Titanium.API.info("title=" + item.properties.title);
	// Update the item's `title` property and set it's color to red:
	//item.properties.title += " (clicked)";
	item.properties.color = 'red';
	// Update the item in the list
	section.updateItemAt(e.itemIndex, item);

	// FIXME for testing
	eval(item.properties.title);
}
