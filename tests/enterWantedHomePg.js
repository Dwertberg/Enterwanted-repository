var bucket = {}

var checkHomePageInfo = (EntWantedHomePageObjects,) => {
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
var enterInfoEw = (EntWantedHomePageObjects, header, mke, ori, name, height, weight, hair, offense, dow, dLicense, dlState, dlExp, licPlate, licState, licExp ) => {
    EntWantedHomePageObjects.setValue('@header', header)
    EntWantedHomePageObjects.setValue('@mke', mke)
    EntWantedHomePageObjects.setValue('@ori', ori)
    EntWantedHomePageObjects.setValue('@name', name)
    EntWantedHomePageObjects.setValue('@height', height)
    EntWantedHomePageObjects.setValue('@weight', weight)
    EntWantedHomePageObjects.setValue('@hair', hair)
    EntWantedHomePageObjects.setValue('@offense', offense)
    EntWantedHomePageObjects.setValue('@dow', dow)
    EntWantedHomePageObjects.setValue('@dLicense', dLicense)
    EntWantedHomePageObjects.setValue('@dlState', dlState)
    EntWantedHomePageObjects.setValue('@dlExp', dlExp)
    EntWantedHomePageObjects.setValue('@licPlate', licPlate)
    EntWantedHomePageObjects.setValue('@licState', licState)
    EntWantedHomePageObjects.setValue('@licExp', licExp)
    EntWantedHomePageObjects.click('@saveBtn') 
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
        bucket.click('@dropDownEw')
        bucket.expect.element('@headerHdr').to.be.visible.before(5000)
        enterInfoEw(bucket, '12345678', '1', '12345678', 'bo', '12', '', 'br', '12as', '1201201', '', 'U', '1203201', 'a1b2', 'T', '1101201' )
        bucket.assert.containsText("@hdrError", 'The "Header" field should be between 9 and 19 characters long.')
        bucket.assert.containsText("@mkeError", 'The "MKE" field should be between 2 and 4 characters long.')
        bucket.assert.containsText("@oriError", 'The "Originating Agency Identifier" field should be 9 characters long.')
        bucket.assert.containsText("@nameError", 'The "Name" field should be between 3 and 30 characters long')
        bucket.assert.containsText("@sexError", 'The field named "Sex" must be included.')
        bucket.assert.containsText("@raceError", 'The field named "Race / Ethnicity" must be included.')
        bucket.assert.containsText("@heightError", 'The "Height" field should be 3 characters long.')
        bucket.assert.containsText("@weightError", 'The field named "Weight" must be included.')
        bucket.assert.containsText("@hairError", 'The "Hair" field should be between 3 and 10 characters long.')
        bucket.assert.containsText("@offenseError", 'The "Offense" field should be between 5 and 15 characters long.')
        bucket.assert.containsText("@dowError", `The "Date of Warrant/Violation" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today's date.`)
        bucket.assert.containsText("@dlError", '')
        bucket.assert.containsText("@dlStateError", 'The "DL State" field should be 2 characters long.')
        bucket.assert.containsText("@dlExpError", `The "DL Expiration Date" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today's date.`)
        bucket.assert.containsText("@licPlateError", 'The "License Plate" field should be between 5 and 8 characters long.')
        bucket.assert.containsText("@licPlateStateError", 'The "License State" field should be 2 characters long.')
        bucket.assert.containsText("@licPlateExpError", `The "License Expiration Date" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today's date`)
        
        

        


    },


}