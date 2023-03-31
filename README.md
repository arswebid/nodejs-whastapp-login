# nodejs-whastapp-login
To automate logging into WhatsApp using Node.js, you can use the selenium-webdriver library to control a web browser such as Chrome or Firefox.

Here's an example script that logs into WhatsApp using a Chrome browser
In this example, we use the Chrome browser and set up options to save the user's data in a Chrome profile directory. We create a Chrome driver using the selenium-webdriver library and navigate to the WhatsApp Web page. We wait for the user to scan the QR code and then find the search box to enter the phone number. Once the login is complete, we log a success message to the console and close the browser.

Note that this script assumes that the user has already scanned the QR code using the WhatsApp mobile app. You should also replace <phone number> with the actual phone number to log in to. This script is provided as an example and may need to be modified based on your specific use case.
