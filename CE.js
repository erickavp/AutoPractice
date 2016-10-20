module.exports = {
  'Task 22' : function (browser) {
    browser
      .url('https://cedev.channelauction.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
      .setValue('input[ng-model="loginCtrl.password"]', 'jose')
      .click('button[data-elm-id="btnLogin"]')
      .pause(3000)
      .assert.urlEquals('https://cedev.channelauction.com/#/app/cas/dashboard')
      .url('https://cedev.channelauction.com/#/app/cas/property-file/new')
      .pause(3000)
      .waitForElementVisible('select[data-elm-id="productType"]', 7000)
      .click('select.form-control option[value="string:traditionalListing"]')
      //Product drop-down is working
      .waitForElementVisible('select[data-elm-id="client"]', 7000)
      //CLIENT is pending
      //.click('select.form-control option[value="string:976a9c91-4a1b-4edd-b259-224129bde27e"]')
      //Add Line 1:
      .pause(3000)
      .setValue('input[ng-model="model.propertyAddress.line1"]','1219 E 81st St')
      .pause(1000)
      //Add zipCode 
      .setValue('input[ng-model="model.propertyAddress.zipCode"]','90001')
      //Select PropertyType
      .waitForElementVisible('select[data-elm-id="propertyType"]', 7000)
      .click('select.form-control option[value="string:Single Family-Attached"]')
      //Add Year
      .waitForElementVisible('input[data-elm-id="yearBuilt"]', 10000)
      .setValue('input[data-elm-id="yearBuilt"]', '2002')
      //Select Home Style
      .waitForElementVisible('select[data-elm-id="homeStyle"]', 7000)
      .click('select.form-control option[value="string:Colonial"]')
      //Add # of Stories
      .waitForElementVisible('input[data-elm-id="storiesNum"]', 10000)
      .setValue('input[data-elm-id="storiesNum"]', '5')
      //Add Home Square Footage 
      .waitForElementVisible('input[data-elm-id="sqft"]', 10000)
      .setValue('input[data-elm-id="sqft"]', '1500')
      //Add Garage Type
      .waitForElementVisible('select[data-elm-id="garageType"]', 7000)
      .click('select.form-control option[value="string:Attached"]')
      //Add # of Cars
      .waitForElementVisible('input[data-elm-id="garageNumCars"]', 10000)
      .setValue('input[data-elm-id="garageNumCars"]', '2')
      //Add 1/4 Bathrooms
      .waitForElementVisible('input[data-elm-id="oneQuarterBathrooms"]', 10000)
      .setValue('input[data-elm-id="oneQuarterBathrooms"]', '1')
      //Add Half Bathrooms
      .waitForElementVisible('input[data-elm-id="halfBathrooms"]', 10000)
      .setValue('input[data-elm-id="halfBathrooms"]', '3')
      //Add 3/4 Bathrooms
      .waitForElementVisible('input[data-elm-id="threeQuarterBathrooms"]', 10000)
      .setValue('input[data-elm-id="threeQuarterBathrooms"]', '2')
      //Add Full Bathrooms
      .waitForElementVisible('input[data-elm-id="fullBathrooms"]', 10000)
      .setValue('input[data-elm-id="fullBathrooms"]', '1')
      //Add Total Bathrooms
      .waitForElementVisible('input[data-elm-id="totalBathrooms"]', 10000)
      .setValue('input[data-elm-id="totalBathrooms"]', '3')
      //Add Bedrooms
      .waitForElementVisible('input[data-elm-id="bedrooms"]', 10000)
      .setValue('input[data-elm-id="bedrooms"]', '8')
      //Add Lot Size Acres
      .waitForElementVisible('input[data-elm-id="lotSizeAcres"]', 10000)
      .setValue('input[data-elm-id="lotSizeAcres"]', '4008')
      //Add Lot Size Sqft
      .waitForElementVisible('input[data-elm-id="lotSizeSqft"]', 10000)
      .setValue('input[data-elm-id="lotSizeSqft"]', '5400')
      //Select Land Fee/Lease
      .waitForElementVisible('select[data-elm-id="landFeeLease"]', 7000)
      .click('select.form-control option[value="string:Fee"]')
      //Click en Create
      .waitForElementVisible('select[data-elm-id="btnCreate"]', 7000)
      .pause(5000)
      .pause(5000)
      .click('select.form-control option[value="btnCreate"]')


      }
};