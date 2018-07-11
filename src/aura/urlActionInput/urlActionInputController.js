({
	urlRedirect : function(component, event, helper)
    {
        var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
            // get the fields that changed for this record
            
    
        } else if(eventParams.changeType === "LOADED") {
            // record is loaded in the cache
            var accountType = component.get("v.simpleAccount.Type");
            var urlEndpoint = component.get("v.simpleAccount.Find_Coffee_URL__c");
            
            console.log("type: " + accountType);
            
            if(accountType == null)
            {
                
            }
            else
            {
                console.log('url: ' + urlEndpoint);
                var urlEvent = $A.get("e.force:navigateToURL");
                urlEvent.setParams({
                    "url": urlEndpoint
                });
                urlEvent.fire();
                $A.get("e.force:closeQuickAction").fire();
            }
            
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted and removed from the cache
        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving or deleting the record
        }

    },
    handleLoad: function(component, event, helper) {
        
    },

    handleSubmit: function(component, event, helper) {
        
    },

    handleError: function(component, event, helper) {
        
    },

    handleSuccess: function(component, event, helper) {
        
        var urlEndpoint = component.get("v.simpleAccount.Find_Coffee_URL__c");
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": urlEndpoint
        });
        urlEvent.fire();
        $A.get("e.force:refreshView").fire();
        $A.get("e.force:closeQuickAction").fire();
    }
    
})