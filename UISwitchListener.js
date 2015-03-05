Clazz.UISwitchListener = Clazz.extend(Clazz.Base,{

    switchUI :function(config){
                $('#product').empty();
        window.location.hash = "page2";
        var widget = new Clazz.addToCartWidget(config);
        var contactContainer = document.getElementById("addToCartWidgetContainer");
        widget.render(contactContainer);
    }
});



/* var previousContainer = document.getElementById("product");
        var currentContainer = document.getElementById("addToCartWidgetContainer");
        var widget = new Clazz.addToCartWidget(config);
        this.stack.push(previousContainer);
        $('#product').empty();
        widget.render(contactContainer);
        
        navigate : function(currentContainer, previousContainer, widget, config){
	var previousContainer = document.getElementById("product");
       	var currentContainer = document.getElementById("addToCartWidgetContainer");
        	var widget = new Clazz.addToCartWidget(config);
document.getElementById(“product”).innerHTML = response.html;
window.history.pushState(‘page2’,’tittle-tattle’,’/page2.html’)
        	this.stack.push(previousContainer);
        	$('#product').empty();
        	widget.render(contactContainer);
}

        
        */