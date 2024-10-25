//create a global variable called result
 
 
//create a function called getLocation
 
  //create a variable that sets the value of true if the browser is Chrome
 
  
  //create an if statement with the following condition: if geolocation and the browser is Chrome, are both true, then show current position. Additionally, display a message that says "You're using Chrome, so you're cool!"
 
    
    //otherwise if the browser is not Chrome, then display a message that says "Youu're not on the cool list. Then display a link that will send the user to Chrome's download page."
 
  
    //if the above conditions are not met, then display a message that says "Geolocation is not supported by this browser."
 
 
//create a function that will output the position to HTML

let result;

function getLocation(){
    let isChrome = /Chrome/.test(navigator.userAgent);
if (navigator.geolocation && isChrome) {
    navigator.geolocation.getCurrentPosition(showPosition);
    alert("You're using Chrome, so you're cool");
} else {
    let message = document.getElementById('message');
    message.innerHTML=`<p>You're not on the cool list. Download <a href="google.com/chrome">Chrome.</a></p>`;
   
}

}
function showPosition(position) {
    result = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    let positionOutput = document.getElementById('position');
    positionOutput.innerHTML= `Position is ${position.coords.latitude} and ${position.coords.longitude}`;
}
