console.log("Hello, world")


const message = document.querySelector('#message')



const form = document.querySelector('form')

const addMovie = evt => {
    evt.preventDefault();
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')

    movieTitle.addEventListener('click', crossOffMovie)

   
   

    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
    
}

const deleteMovie = event => {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

const crossOffMovie = event => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = 'Finished Movie'
    }else{
        message.textContent = 'Movie added back'
    }
}



form.addEventListener('submit', addMovie)