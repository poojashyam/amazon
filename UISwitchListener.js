Clazz.UISwitchListener = Clazz.extend(Clazz.Base,{

    switchUI :function(config){
        $('#product').empty();
        var widget = new Clazz.addToCartWidget(config);
        var contactContainer = document.getElementById("addToCartWidgetContainer");
        widget.render(contactContainer);
        
    }
   
});


    