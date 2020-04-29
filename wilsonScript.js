var wilson = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        console.log("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    },

    isEqual: function(assertion1, assertion2) {
        if(assertion1 !== assertion2){
            console.log("Test failed: Vince says boo " + assertion1 + " is not equal to " + assertion2);
        }
        else{
            console.log("Test passed: Wilson says wow " + assertion1 + " is equal to " + assertion2); 
        }
    },
  };

function it (description, fun){
    console.log(description)
    fun();
};

function expect(argument) {
  var toEqual = function(expectedResult) {
    if(argument === expectedResult){
      console.log("Test passed: Wilson says wow " + argument + " is Equal to " + expectedResult)
    }else {
      console.log("Test failed: Vince says boo " + argument + " is not Equal to " + expectedResult)
    }
    return {
      toEqual: toEqual
    }
    };
}




  //bracket colorizer 