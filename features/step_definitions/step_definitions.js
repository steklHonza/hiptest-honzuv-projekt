module.exports = function () {
    this.Before(function (scenario) {
        this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    });

    this.After(function (scenario) {
        this.actionwords = null;
    });


    this.Given(/^dnes je pátek$/, function (callback) {
        this.actionwords.dnesJePatek();
        callback();
    });

    this.When(/^zeptám se jestli už je pátek$/, function (callback) {
        this.actionwords.zeptamSeJestliUzJePatek();
        callback();
    });

    this.Then(/^mělo by být řečeno "(.*)"$/, function (p1, callback) {
        this.actionwords.meloByBytRecenoP1(p1);
        callback();
    });

    this.Given(/^dnes je neděle$/, function (callback) {
        this.actionwords.dnesJeNedele();
        callback();
    });

    this.Then(/^mělo by být řečeno „Ne“$/, function (callback) {
        this.actionwords.meloByBytRecenoNe();
        callback();
    });
}
