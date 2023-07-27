const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const service = () =>
chrome.setDefaultService (new chrome.ServiceBuilder(chromedriver.path).build())

async function run() {
    let navigation = await new Builder().forBrowser('chrome').build();
    await navigation.get('https://www.google.com');

    const searchBar = await navigation.findElement(By.xpath('//*[@id="APjFqb"]'));
    await searchBar.sendKeys("mentorama");
    await searchBar.sendKeys(Key.ENTER);

    const redirectLink = await navigation.findElement(By.xpath('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div[1]/a/h3'));
    await redirectLink.click();

}

run();
