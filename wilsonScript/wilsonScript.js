var wilson = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        console.error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    },

    isEqual: function(assertion1, assertion2) {
        if(assertion1 !== assertion2){
            console.error("Test failed: Vince says boo: " + assertion1 + " is not equal to " + assertion2       
          );
        }
        else{
            console.log("Test passed: Wilson says wow: " + assertion1 + " is equal to " + assertion2); 
        }
    },
  };

function it (description, fun){
    console.log(description)
    fun();
};
  //bracket colorizer 
