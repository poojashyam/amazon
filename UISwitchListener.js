Clazz.UISwitchListener = Clazz.extend(Clazz.Base,{

    switchUI :function(config){
            this.config = config;
            this.templateUrl = "addToCartWidgetContainer.html";
        var widget = new Clazz.addToCartWidget(config);
        var contactContainer = document.getElementById("addToCartWidgetContainer");
        widget.render(contactContainer);
        
    },
   
});


    