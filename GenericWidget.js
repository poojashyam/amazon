Clazz.GenericWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        initialize : function(config){
            this.config = config;
            //var contactContainer = config.data.getElementById("contactContainer");
            
                //console.log(contactContainer);
            //widget.render(contactContainer);
            //console.log(config.data);
            this.templateUrl = "contact.html";
            //console.log(templateUrl);
            //this.data1 = config2;
            //this.data2=config1;
            //console.log(data1);
            //postRender(config1,config2);
            
        },
       postRender : function(){
        var widgeta=new Clazz.widgetpdp1(this.config.data1);
        var widgetacontainer = document.getElementById("widget1container");
        widgeta.render(widgetacontainer);

        var widgetb = new Clazz.widgetpdp2(this.config.data1);
        var widgetbcontainer = document.getElementById("widget2container");
        widgetb.render(widgetbcontainer);
           
        var widgetc = new Clazz.widgetpdp3(this.config.data1);
        var widgetccontainer = document.getElementById("widget3container");
        widgetc.render(widgetccontainer);
           
           var widgetd = new Clazz.widgetpdp4(this.config.data1);
        var widgetdcontainer = document.getElementById("widget4container");
        widgetd.render(widgetdcontainer);

    }          
});