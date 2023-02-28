const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome.apply()).build()
const {addMovie, crossOff, checkNotification} = require('./automation')

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5501/week_6/Labs/automation/movieList/index.html')
})

// afterAll(async () => {
//     await (await driver).quit()
// })

test('testing adding movie', async () => {
    await addMovie(driver, 'Ramobo')
    
})

test('testing crossing off movie', async () => {
    await crossOff(driver)
})

test('testing notification pop up', async () => {
    await checkNotification(driver)
})