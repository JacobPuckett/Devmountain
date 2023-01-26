/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = []

backpack.push('sword')
backpack.push('shield')
backpack.push('food')

// console.log(backpack)

backpack.splice(0,1)

// console.log(backpack)

backpack.unshift('coat')

// console.log(backpack)

backpack.shift()

// console.log(backpack)

backpack.pop()

// console.log(backpack)

backpack.push('flint', 'blanket', 'knife', 'food')

console.log(backpack)

console.log(backpack.length)

let satchel = backpack.splice(3,2)

console.log('satchel',satchel, 'backpack', backpack)

// for(i = 0; i < backpack.length; i++) {
//     console.log(backpack[i])
// }

// for(i = 0; i < satchel.length; i++) {
//     console.log(satchel[i])
// }

if (backpack.length > 2){
    for(i = 0; i < 2; i++){
        console.log(backpack[i])
    }
}   else{
    for(i = 0; i < backpack.length; i++){
        console.log(backpack[i])
    }
}