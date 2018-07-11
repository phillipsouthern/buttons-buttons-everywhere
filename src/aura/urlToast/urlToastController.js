({
	
    urlRedirect : function(component, event, helper)
    {
        var accountType = component.get("v.simpleAccount.Type");
        var urlEndpoint = component.get("v.simpleAccount.Find_Coffee_URL__c");
        
        
        if(accountType == null)
        {
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "mode" : "sticky",
                "title": "",
                "message": "Type is required before you can continue."
            });
            toastEvent.fire();
            
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