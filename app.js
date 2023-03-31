const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function loginToWhatsApp() {
  // Set up options for Chrome browser
  const options = new chrome.Options();
  options.addArguments('--user-data-dir=./chrome-profile');
  
  // Create Chrome driver
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Navigate to WhatsApp Web page
    await driver.get('https://web.whatsapp.com/');
    
    // Wait for user to scan QR code
    await driver.wait(until.elementLocated(By.css('.landing-wrapper')), 30000);

    // Find search box and enter phone number
    const searchBox = await driver.findElement(By.css('[contenteditable=true]'));
    await searchBox.sendKeys('<phone number>', Key.RETURN);

    // Wait for login to complete
    await driver.wait(until.elementLocated(By.css('.app-wrapper')), 30000);

    // Log in is complete!
    console.log('Logged in to WhatsApp successfully!');
  } finally {
    // Close the browser
    await driver.quit();
  }
}

loginToWhatsApp();
