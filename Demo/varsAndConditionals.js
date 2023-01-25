/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonAttack = 25
let jamieAttack = 35

if (jonAttack > jamieAttack){
    console.log('jons attack is greater than jamies')
}else if (jamieAttack > jonAttack){
    console.log('jamie attack is greater then jons')
}else{
    console.log('their attacks are the same')
}


let jonHealth = 100
let jonDefense = 0

if(jonHealth <= jamieAttack){
    console.log('jon has been slain')
}else{
    jonHealth -= jamieAttack
    console.log(`jons health is now ${jonHealth}`)
}


jonDefense += 15

if (jonHealth <= jamieAttack - jonDefense){
    console.log('jon has been slain')
}else {
    jonHealth -= jamieAttack - jonDefense
    console.log(`jons health is now ${jonHealth}`)
}

if ((jonHealth + 50)>= 100) {
    jonHealth = 100
}else{
    jonHealth += 50
}

console.log(`jons health after bandage ${jonHealth}`)

for (let i = 1; i <= 5; i++){
    if (jonHealth <= jamieAttack - jonDefense){

    
    console.log("jon has been slain")
    }else{
        jonHealth -= jamieAttack - jonDefense
        console.log(`jons current health is ${jonHealth}`)
    }
}

// let hits = 0
// while (jonHealth>0){
//     jonHealth -= jamieAttack - jonDefense
//     hits++
// }

// console.log(hits)