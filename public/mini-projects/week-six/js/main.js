/*Create a function called playGame().
Create a function-scoped variable that gets a random number between (and including) 1 and 100. Make sure your result does not include 0 (zero).
Create a variable called min and set it to 50.
Create a variable called max and set it to 75.
Then write an if/else statemenet the follows the following logic: 
If the random number is greater than the minimum variable and less than the maximum variable, 
then send a message to HTML that says Your Number: #, You Won! (the # should be replaced with the randomly generated number. 
    If it doesn't fall within those parameters, then the message in HTML should say Your Number: #, Keep Trying!*/

let minNum= 50; //declare the min and max
let maxNum = 75;

function getRandomNum() {
    let randomNum = Math.floor(Math.random()*100)+1; // math floor rounds the integer to nearest whole number, math random generates a number 0 to 1 x that by 100 so the decimal moves. adding one removes the 0 from being possible
    return randomNum; //passes the above equation
   

}

function playGame(minNum,maxNum) { //create the function and include the parameters 
    let randomNum = getRandomNum(); //Pass the randomNum function to the playGame function
    let msg; // variable is blank bc you dont know the msg yet, acts as placeholder?
    if (randomNum >= minNum && randomNum<= maxNum) { // the randomNum needs to be true to both conditions
         msg = 'Your Number:' + randomNum + ',' + 'You Won!'; 
    }
    else {
        msg = 'Your Number:' + randomNum + ',' + ' Keep Trying!'
    }

document.getElementById ('result').innerText= msg; // result is the html id, include msg so it displays what i want the message to say
}


