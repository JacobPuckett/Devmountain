

let myArray = ['OliveGarden', 'Mcdonalds', 'PizzaHut'];

const random = Math.floor(Math.random() * myArray.length);
console.log(random, myArray[random]);

const food = () => {
    alert(myArray[random])
}


let btn = document.querySelector('#restrant')

btn.addEventListener('click', food)