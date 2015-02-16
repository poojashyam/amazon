Clazz.widgetpdp4 = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
                    
            //var contactContainer = config.data.getElementById("contactContainer");
            
                //console.log(contactContainer);
            //swidget.render(contactContainer);
            //console.log("from widget2" +config.data);
            this.templateUrl = "templatepdp4.html";
            this.data = config;
        },
        jq1: function()
        {
            $(document).ready(function(){
   $('#template4 img').width(75);
   $('#template4 img').mouseover(function()
   {
      $(this).css("cursor","pointer");
   });
   $("#template4 img").toggle(function()
     {$(this).animate({width: "500px"}, 'slow');}, 
     function()
     {$(this).animate({width: "75px"}, 'slow');
   });
});
        
        },
        postRender :function(){
            this.jq1();
        }
    
});