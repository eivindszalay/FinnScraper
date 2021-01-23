//Puppeteer er et javascript biblotek for webscraping
const puppeteer = require('puppeteer');

async function scrapeProduct(url)
{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)

    //Henter "Vi ser etter deg med disse egenskapene" delen av siden
    //Argumentet til funksjonen er en xPath som jeg fant ved å isnpisere siden
    // Funksjonen returner en array, vi tar ut det første elementet og kaller det el
    const[el] = await page.$x('/html/body/main/div/div[3]/div[1]/div/div[4]/section/ul');
    //Gets the content of the element
    const txt = await el.getProperty('textContent');
    //Converts the contents into a string
    const rawTxt = await txt.jsonValue();

    console.log({rawTxt});

    browser.close();


}


scrapeProduct('https://www.finn.no/job/fulltime/ad.html?finnkode=205523371');