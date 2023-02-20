const findTheOutlier = arr => {
    let evens = arr.filter(num => num % 2 === 0)
    let odds = arr.filter(num => num % 2 !== 0)

    evens.length > odds.length ? odds[0] : evens[0]
}