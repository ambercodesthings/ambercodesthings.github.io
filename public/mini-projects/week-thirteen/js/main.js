//below you will create an event listener. All your code will be inside that event listener

//create an click event listener called isValidButton
  
  //inside the event listener set undefined variables for isValidMsg and getInput. You can leave them undefined because we'll use them later.

  //set isValidMsg to equal the isValidMsg id in your HTML
  
  //output isValidMsg to HTML and set it to an empty string
  
  //set getInput to take in the value of isValidInput (which matches the id of your input in your HTML)
  
  //create a try statement

    //if getInput is empty, then throw the string "is empty"
    
    //if getInput is not a number, then throw the string "is not a number"
    
    //if getInput is greater than 15, then throw the string "is too high"
    
    //if getInput is less than 12, then throw the string "is too low"

    //open your catch statement

    //output isValidMsg to HTML and output a string of "Input" and add the error message

    //open your finally statement

    //create an alert that says "This will always run.

    document.getElementById('isValidBtn').addEventListener('click', function isValidBtn() {
        let isValid;
        
        let isValidMsg= document.getElementById('isValidMsg');
        isValidMsg.textContent="";
        let getInput=document.getElementById('isValidInput').value;
try {
    if (getInput=== "") {
        throw "is empty";
    }
    if (isNaN(getInput)) {
        throw "is not a number";
    }
    if (getInput >15) {
        throw "is too high";
    }
    if (getInput <  12 ) {
        throw "is too low";
    } 
} catch (error) {
        document.getElementById('isValidMsg').textContent = "Input" + error;
    } finally {
        alert('this will always run');
    }

    });