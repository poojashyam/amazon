Clazz.customerDetailsWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(data){
            this.templateUrl = "customerDetailsWidgetContainer.html";
            this.data = data;
        },
        
        apps1 : function(){
            $('.change').hide();
            $('#changeShippingAddress').click(function(){
                $('#otherShippingAddress').toggle()
            })
            $('#changePaymentMethod').click(function(){
                $('#otherPaymentMethod').toggle()
            })
            $('#changeBillingAddress').click(function(){
                $('#otherBillingAddress').toggle()
            })
            $('.otherBillingAddress').click(function(){
               otherbillingAddress=$(this).text();
 $('#currentBillingAddress').text(otherbillingAddress)
            })
            
            },
        postRender : function(){
        this.apps1();
        }
});