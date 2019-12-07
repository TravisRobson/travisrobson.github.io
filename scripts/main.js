// const myHeading = document.querySelector( 'h1' );
// myHeading.textContent = 'Hello world!';



// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }



let paperLink = document.querySelector( 'li' );

paperLink.onclick = function() {
	alert( 'I want the link options the be here!' )
}

let image = document.querySelector( 'img' );

// image.onclick = function() {
// 	let imageSrc = image.getAttribute( 'src' );

// 	if ( imageSrc === 'images/arxivLogo.png' ) {
// 		image.setAttribute( 'src', 'what.png' )
// 	}
// 	else {
// 		image.setAttribute( 'src', 'images/arxivLogo.png' )
// 	}
// };


let myButton  = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {

  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;

}

if( !localStorage.getItem('name') ) {

  setUserName();

} 
else {

  let storedName        = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;

}

myButton.onclick = function() {
  setUserName();
}


