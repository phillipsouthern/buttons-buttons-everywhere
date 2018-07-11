({
    
    
    
    
    /*handleSaveRecord : function(component, event, helper) {
         //This saves the record template using Lightning Data Service
        component.find("recordEditor").saveRecord($A.getCallback(function(saveResult){
            if(saveResult.state === "SUCCESS" || saveResult.state === "DRAFT"){
                
                //console.log("Save completed successfully.");
                //$A.get("e.force:closeQuickAction").fire();
                var urlEndpoint = component.get("v.simpleAccount.Find_Coffee_URL__c");
                var urlEvent = $A.get("e.force:navigateToURL");
                urlEvent.setParams({
                    "url": urlEndpoint
                });
                urlEvent.fire();
                $A.get("e.force:closeQuickAction").fire();
                
            }else if(saveResult.state === "INCOMPLETE"){
                console.log("User is offline, device doesn't support drafts.");
            }else if(saveResult.state === "ERROR"){
                console.log("Problem saving record, error: " + JSON.stringify(saveResult.error));
            }else{
                console.log("Unknown problem, state: " + saveResult.state + ", error: " + JSON.stringify(saveResult.error));
            }
        }));
	},
    
    cancel : function(component, event, helper){
        $A.get("e.force:closeQuickAction").fire();
    },
    
    ldLoaded : function(component, event, helper)
    {
        var eventParams = event.getParams();
        
        if(eventParams.changeType === "LOADED") 
        {
            var accountType = component.get("v.simpleAccount.Type");
            var urlEndpoint = component.get("v.simpleAccount.Find_Coffee_URL__c");
            
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
        }
            
    }
    */
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
        //cmp.set('v.showSpinner', false);
    },

    handleSubmit: function(component, event, helper) {
        //cmp.set('v.disabled', true);
        //cmp.set('v.showSpinner', true);
        //
        var accountType = component.get("v.simpleAccount.Type");
        console.log('type: ' + accountType);
        
        if(accountType == null)
        {
            
        }
    },

    handleError: function(component, event, helper) {
        // errors are handled by lightning:inputField and lightning:nessages
        // so this just hides the spinnet
        // cmp.set('v.showSpinner', false);
    },

    handleSuccess: function(component, event, helper) {
        //cmp.set('v.showSpinner', false);
        //cmp.set('v.saved', true);
        
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