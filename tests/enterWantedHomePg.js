var bucket = {}

var checkHomePageInfo = (EntWantedHomePageObjects) => {
    EntWantedHomePageObjects.assert.elementPresent('@app')
    EntWantedHomePageObjects.assert.elementPresent('@menuButton')
    EntWantedHomePageObjects.click('@menuButton')
    EntWantedHomePageObjects.assert.elementPresent('@dropMenu')
    EntWantedHomePageObjects.assert.elementPresent('@xButton')
    EntWantedHomePageObjects.assert.elementPresent('@dropDownHome')
    EntWantedHomePageObjects.assert.elementPresent('@dropDownEw')
    EntWantedHomePageObjects.assert.elementPresent('@dropDownModify')
    EntWantedHomePageObjects.assert.elementPresent('@dropDownCancel')
    EntWantedHomePageObjects.click('@xButton')
    EntWantedHomePageObjects.assert.elementPresent('@tileBar')
    EntWantedHomePageObjects.assert.elementPresent('@enterWantedName')
    EntWantedHomePageObjects.assert.elementPresent('@enterWantedDesc')
    EntWantedHomePageObjects.assert.elementPresent('@modifyWantedName')
    EntWantedHomePageObjects.assert.elementPresent('@modifyWantedDesc')
    EntWantedHomePageObjects.assert.elementPresent('@cancelWantedName')
    EntWantedHomePageObjects.assert.elementPresent('@cancelWantedDesc')
    EntWantedHomePageObjects.assert.elementPresent('@versionNumber')
}
module.exports = {
    beforeEach: browser => {
        console.log(browser)
        bucket = browser.page.EntWantedHomePageObjects()
        bucket.navigate()
            .waitForElementPresent('@app', 5000)


    },
    after: browser => {
        browser.end()
//All tests link to test plan https://dmutah.atlassian.net/browse/Q9J-5
    },

    'checking EwHomePgInfo': browser => {
        
        checkHomePageInfo(bucket)
        
    },
        //sex and race are not included because they are drop down menus so min characters would be nothing
      'enter wanted page, minimal characters': browser => {
        bucket.click('@menuButton')
        .click('@dropDownEw')
        bucket.expect.element('@headerHdr').to.be.visible
        bucket.click ('@header')
        .setValue('@header', 12345678)
        .setValue('@mke', 1)
        .setValue('@ori', '12345678')
        .setValue('@name', '12')
        .setValue('@height', 12)
        .setValue('@weight', )
        .setValue('@hair', 'br')
        .setValue('@offense', '')
        .setValue('@', )
        .setValue('@', )
        .setValue('@', )
        .setValue('@', )


    },


}