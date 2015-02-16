Clazz.widgetpdp3 = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
                    
            //var contactContainer = config.data.getElementById("contactContainer");
            
                //console.log(contactContainer);
            //swidget.render(contactContainer);
            //console.log("from widget2" +config.data);
            this.templateUrl = "templatepdp3.html";
            this.data = config;
        }
});