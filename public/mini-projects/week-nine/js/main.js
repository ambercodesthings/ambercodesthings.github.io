
// prevent default event and input event when form is submitted it displays message 
const form = document.getElementById('contactForm');
let nameInput = document.getElementById('name');
form.addEventListener('submit',function(event){
    event.preventDefault();
    let nameValue = nameInput.value;
    alert(`Thanks, ${nameValue}! We will contact you within 48 hours`)
})


// input event - counts character length
let msgInput = document.getElementById('msg');
msgInput.addEventListener('input',function(){
    let charCount = msgInput.value.length;
    document.getElementById("msgCount").innerHTML = `Message is ${charCount} characters long`;
})

//blur event - when user moves curser away it will display whether email is valid
let emailInput = document.getElementById('email');
let emailMessage = document.getElementById('emailMessage');

function showMessage(message) {
    emailMessage.innerHTML = message;
}

emailInput.addEventListener('blur', function(){
    let emailValue = emailInput.value;
if (!emailValue.includes('@')) {
    showMessage ('Invalid email');
} else { 
    showMessage ('Email is valid');
}

});

let button = document.querySelector('button');
button.addEventListener('mouseover', function(){
button.style.backgroundColor = 'purple';
});

// focus -changes color of border when inside 
let messageInput = document.getElementById('msg');
messageInput.addEventListener ('focus', function(){
    messageInput.style.borderColor = 'purple';
})

let buttonClick = document.querySelector('button');
buttonClick.addEventListener ('click', function(){
    alert ('Submitted.')
    buttonClick.style.backgroundColor = 'green';
})

document.addEventListener ('keydown', function(event){
    if (event.key=='x') {
    alert ('user pressed x');
}
})

document.addEventListener ('keyup', function(event){
    if (event.key=='x') {
        alert ('x released');
    }
})

document.addEventListener ('mouseout', function(){
    button.style.backgroundColor = 'pink';
})