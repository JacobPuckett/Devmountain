console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited successfully');
}

function comp(evt) {
	evt.preventDefault();

	alert('good job')
}

let img = document.querySelector('img')

img.addEventListener('mouseover', comp)

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);