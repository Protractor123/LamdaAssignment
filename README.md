PreRequisities : 

Install NodeJS : https://nodejs.org/en/download/
To check if the NodeJS and npm are correctly installed, enter the following commands:
$ node -v
$ npm -v

Install Protractor globally using npm, by entering the following command:
npm install -g protractor

This will install protractor (Protractor API) and a default Selenium Server webdriver-manager, which means there is no need to start a standalone server.
To check if Protractor is installed properly and know its version, enter the following command
protractor --version

Update the WebDriver Manager by entering the following command

webdriver-manager update
Start the WebDriver Manager by entering the following command. This would run WebdriverManager in the background and would identify the tests and run them using Protractor. As Protractor is used, the web driver automatically sends the tests to the relevant browsers.

webdriver-manager start

On the command prompt run the command to run all the tests : protractor conf.js