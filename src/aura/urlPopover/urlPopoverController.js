({
	urlRedirect : function(component, event, helper)
    {
        var accountType = component.get("v.simpleAccount.Type");
        var urlEndpoint = component.get("v.simpleAccount.Find_Coffee_URL__c");
        
        
        if(accountType == null)
        {
            component.find('overlayLib').showCustomPopover({
            body: "Type is required before you can continue.",
            referenceSelector: ".mypopover",
            cssClass: "slds-popover_walkthrough,slds-popover_tooltip,slds-popover__body,slds-nubbin_left,no-pointer,cUrlPopover"
            }).then(function (overlay) {
                setTimeout(function(){
                    overlay.close(); 
                }, 5000);
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