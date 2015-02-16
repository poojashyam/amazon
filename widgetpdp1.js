Clazz.widgetpdp1 = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
            //this.templateUrl = config.templateUrl;
            this.data = config;
            this.templateUrl = "templatepdp1.html";
            //console.log("widget1" +config.data);
        }
});