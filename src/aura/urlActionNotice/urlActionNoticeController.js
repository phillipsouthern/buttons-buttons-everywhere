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
                $A.createComponents([
                ["ui:message",{
                    "title" : "",
                    "severity" : "error",
                }],
                ["ui:outputText",{
                    "value" : "Type is required before you can continue."
                }]
                ],
                  function(components, status, errorMessage){
                    var message = components[0];
					var outputText = components[1];
					message.set("v.body", outputText);
					var div1 = component.find("div1");
					div1.set("v.body", message);

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
                $A.get("e.force:closeQuickAction").fire();
            }
            
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted and removed from the cache
        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving or deleting the record
        }

    }
})