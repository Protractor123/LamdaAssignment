// conf.js
exports.config = {
    framework: 'jasmine',
   specs: ['./*spec.js'],    
    directConnect: true,
    chromeDriver:
        'C:/Users/vkumar10/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_73.0.3683.75.exe',

onPrepare: async () => {     
        await browser.driver
            .manage()
            .window()
            .maximize();
        browser.waitForAngularEnabled(false); 
        browser.ignoreSynchronization = true;
    }

}