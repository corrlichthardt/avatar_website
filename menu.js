window.addEventListener("load", function(){

	var menuItems = document.querySelectorAll("nav a");
	console.log(menuItems)
	for(var i=0; i<menuItems.length; i++){
		menuItems[i].innerHTML = "<span></span><span>"+menuItems[i].innerHTML+"</span>";
	}

});
