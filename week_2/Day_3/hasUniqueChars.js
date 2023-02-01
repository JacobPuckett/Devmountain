// Write your code below


function hasUniqueCharaters(word) {
    let uniqueCharaters = new Set([])
    for (let i = 0; i < word.length; i++){
        uniqueCharaters.add(word[i])
    }
    return uniqueCharaters.size === word.length
}
console.log(hasUniqueCharaters("monday"))