const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function je_uz_patek(today) {
  if(today==="patek") {
    return "huraaa"
  }
}
         
Given('je {string}', function (string) { 
  this.today=string;
});

When('zeptam se zda je patek', function () { 
  this.actualAnswer = je_uz_patek(this.today);
});

Then('je receno {string}', function (expectedAnswer) { 
  assert.equal(this.actualAnswer, expectedAnswer);
});
