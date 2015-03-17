function doClick(e) {  
    alert($.label.text);
}
 
function showmenu(e){
	$.main.animate({left:200,duration:100});
}
 
function hidemenu(e){
	$.main.animate({left:0,duration:100});
}
 
$.index.open();