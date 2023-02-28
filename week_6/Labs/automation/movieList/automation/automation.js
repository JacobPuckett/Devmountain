const {By} = require("selenium-webdriver")

const addMovie = async (driver, movieTitle) => {
   await driver.findElement(By.css('input')).sendKeys(`${movieTitle}\n`)
}

const crossOff = async (driver) => {
    await driver.findElement(By.css('span')).click()
}


//check for notification
const checkNotification = async (driver) => {
    await driver.findElement(By.css('aside')).click()
}

//delete movie
// const deleteMovie = async (driver)

module.exports = {
    addMovie,
    crossOff,
    checkNotification
}