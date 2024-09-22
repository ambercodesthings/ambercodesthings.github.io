//the following project requires the use of the following DOM APIs: querySelector(), getElementsByTagName(), querySelectorAll(), and getElementById(). In order to complete this project successfully, at one point or another, you will have used each of them.
 
//Using a DOM api, store the header's text in a variable
 const headerText = document.querySelector('.header').textContent;
console.log(headerText)
document.getElementById('articleTitle').innerHTML = (`The article title is ${headerText}`);
 
//Using a DOM api, get the number of paragraphs in the page
 const paragraphCount = document.getElementsByTagName('p').length;
 console.log(paragraphCount);
 
//Using a DOM api, get the number of heading tags used in the document
 const headingTags = document.querySelectorAll('h1, h2, h3, h4, h5,h6').length;
 console.log(headingTags)
 
//Using a DOM api, get the number of list items being used in the unordered list
 const listItems = document.querySelectorAll ('ul li').length;
 console.log(listItems);
 
//Use the correct DOM api to count the number of links being used in the page
 let links = document.querySelectorAll ('a').length;
 console.log(links)
 
//set a variable to show the maximum number of links allowed on the page is 3
 let maxLinks = 3;
 console.log(maxLinks)
 
//create an if/else statement that argues the following: if the total number of links on the page is greater than the maximum number of links allowed, then print the message "This is too many links. The limit is (include the variable for the maximum number of links)."
if ( links > maxLinks) {
    message = (`This is too many links. This limit is ${maxLinks}`);
} else  {
    message = (`This is the correct amount of links.`);
}

document.getElementById('result').innerHTML = `This article contains <strong>${paragraphCount}</strong> paragraphs and a total of <strong>${listItems}</strong> list items. 
There are a total of <strong>${headingTags}</strong> and <strong>${links}</strong> links used on this page.` + message;