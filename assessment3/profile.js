let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

function favColor(evt) {
	evt.preventDefault();

	alert('Purple')
}

function favPlace(evt) {
	evt.preventDefault();

	alert('Italy')
}

function favRitual(evt) {
	evt.preventDefault();

	alert('Gaming in the rain')
}



color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click', favRitual)
