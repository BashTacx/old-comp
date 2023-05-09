//document.body.children[1].children[0].href = 'https://google.com';

// alert();
// window.alert();  these are equivalents

 let anchorElement = document.getElementById('external-link');
 anchorElement.href = 'https://google.com';

 anchorElement = document.querySelector('p a'); //a{color:red}
 anchorElement.href = 'https://academind.com';

 // ADD AN ELEMENT

 // 1. Create a new element

 let newAnchorElement = document.createElement('a');

 newAnchorElement.href = 'https://google.com';
 newAnchorElement.textContent = 'This leads to Google!';


 // 2. Get access to the perent elememmt that should hold the new element

 let firstParagraph = document.querySelector('p');

 // 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);


// REMOVE ELEMENT

// 1.Select the element that should be removed
let firstH1Element = document.querySelector('h1');

// 2. Remove it!

//firstH1Element.remove();   //  moze ili jedno ili drugo
firstH1Element.parentElement.removeChild(firstH1Element); // this is for older browsers

// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph); 

// innerHTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';