Clazz.widgetpdp2 = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
                    
            //var contactContainer = config.data.getElementById("contactContainer");
            
                //console.log(contactContainer);
            //swidget.render(contactContainer);
            //console.log("from widget2" +config.data);
            this.templateUrl = "templatepdp2.html";
            this.data = config;
            
        },
        bindUI : function(){
            var buttonSwitcher = document.getElementById("uiSwitcher");
            var switchListener = new Clazz.UISwitchListener(this.config);
            var self = this;
            buttonSwitcher.onclick = function(){
                switchListener.switchUI(self.data);
            }
            
        }
});