//button mouse over style. Creates bubble effect and the removes it once mouse moves
let buttons = document.querySelectorAll('.button');
buttons.forEach(function(button) {
button.addEventListener('mouseover', function(){
button.style.transform = 'scale(1.1)';
button.style.transition = 'transform 0.3s ease';
});

button.addEventListener('mouseout', function(){
    button.style.transform = 'scale(1)';
})
});

//
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link=> {
    link.addEventListener('click', function(){
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    })
});
// changes color to green when mouse over
let allLinks = document.querySelectorAll ('a');
allLinks.forEach(link=> {
link.addEventListener('mouseover', function() {
   link.style.color = '#444C22';
});


//changes link color back to normal
link.addEventListener('mouseout', function(){
    link.style.color = '';
});
});

// hero heading animation
let textReveal = document.getElementById('hero-heading');
let words = textReveal.textContent.split(' ');
textReveal.textContent = '';

words.forEach((word, index)=> {
    let span = document.createElement('span');
    span.textContent = word;
    span.classList.add('word');
    span.style.opacity =0;
    textReveal.appendChild(span);

    if (index < words.length -1) {
        textReveal.appendChild(document.createTextNode(' '));
    }
    
    setTimeout(() => {
        span.style.opacity = 1;
    }, index * 100);
});


//nav menu
let hamburger = document.getElementById('hamburger');
let navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
});
