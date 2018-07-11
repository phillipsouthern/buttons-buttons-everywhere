({
	urlRedirect : function(component, event, helper)
    {
        var accountType = component.get("v.simpleAccount.Type");
        var urlEndpoint = component.get("v.simpleAccount.Find_Coffee_URL__c");
        
        
        if(accountType == null)
        {
            component.find('notifLib').showNotice({
                "variant": "info",
                "header": "Issue",
                "message": "Type is required before you can continue.",
                closeCallback: function() {
                }
            });
            
        }
        else
        {
            console.log('url: ' + urlEndpoint);
            var urlEvent = $A.get("e.force:navigateToURL");
            urlEvent.setParams({
                "url": urlEndpoint
            });
            urlEvent.fire();
        }

    }
    
    
})