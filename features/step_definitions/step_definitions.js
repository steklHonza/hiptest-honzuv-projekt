const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

//module.exports = function () {
//    this.Before(function (scenario) {
//        this.actionwords = Object.create(require('./actionwords.js').Actionwords);
//    });

function jeUzPatek(today) {
  if (today === "patek") {
    return "huraaa"; 
  } 
  else {
    return "ne"
  }
}

    Given('dnes je {string}', function (givenDay) {
      this.today = givenDay;
    });
    
    When('zeptam se zda uz je {string}', function (today) {
      this.actualAnswer = jeUzPatek(this.today);
    });
    
    Then('je receno {string}', function (expectedAnswer) {
      assert.equal(this.actualAnswer, expectedAnswer);
    });
//}
