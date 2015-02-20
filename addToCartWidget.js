Clazz.addToCartWidget = Clazz.extend(  //extend will add the two together
	Clazz.WidgetWithTemplate, {
        
        initialize : function (config) {  //first function to be called, get the parameteres passed
           this.data = config;
            this.templateUrl = "contact.html";
        },
        postRender : function(){
        var customerDetailsWidget = new Clazz.customerDetailsWidget (this.data);
                var customerDetailsWidgetContainer = document.getElementById("customerDetailsWidgetContainer");
                customerDetailsWidget.render(customerDetailsWidgetContainer);
        var headerWidget = new Clazz.headerWidget (this.data);
                var headerWidgetContainer = document.getElementById("headerWidgetContainer");
                headerWidget.render(headerWidgetContainer);
    
        }
    });