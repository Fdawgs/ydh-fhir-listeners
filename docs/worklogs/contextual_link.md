# Contextual Link
## Key tasks
Task | Status | Date | By |
-----|--------|------|----|
Add test records to PAS test environment | Completed | 2018-12-12 | David Suckling
Add contextual link to PAS test environment | Completed | 2019-10-21 | Gary England (Intersystems), David Suckling, Frazer Smith
Test contextual link | Completed | 2019-10-21 | Frazer Smith
Build contextual link obfuscator service | Completed | 2019-03-04 | Frazer Smith
Deploy contextual link obfuscator service | Completed | 2019-09-25 | Frazer Smith
Choose logo for link | Completed | 2019-03-19 | Anthony Smith
Add contextual link to live environment | Awaiting third party | | 

## Work log
### Test Records
Test records were provided by Will from Black Pear on 2018-11-28, which were then passed onto the Application Support Manager (David Suckling) to be added to the test environment of our PAS, TrakCare.

### Contextual Link in PAS
An existing contextual link in the test env was repurposed to test the contextual link for the test records, which had some issues due to Trakcare adding extra parameters into the generated URL that was causing looping issues when attempting to authenticate and login to Black Pear's eSP.

This was eventually resolved on 2019-02-05, only for the test environment to be upgraded by InterSystems the following week, breaking the contextual link DateOfBirth parameter. The parameter needs to be in ISO 8601 format (YYYY-MM-DD) but was in DD/MM/YY format.

A ticket was raised with InterSystems on 2019-03-06, with InterSystems confirming on 2019-03-15 that they can create a fix for this for just the SIDeR link, and that a new request will need to be made with the final logo for the icon and link expression. A new request was made on 2019-03-23.

It wasn't until 2019-09-13 that this was finally added to our test environment of TrakCare, but still wasn't working as intended.
On 2019-10-11 this was fixed.

The contextual link's icon profile values in TrakCare looks like so:

Link url: `
<location of contextual link obfuscation service>
`

Link expression: `
"&"_##class(Custom.ENYH.Integration.ContextualLink.GenericPatientLink).BuildURLVars("patient=https://fhir.nhs.uk/Id/nhs-number|{NHSNumber}&birthdate={DateOfBirthISO8601}&location=https://fhir.nhs.uk/Id/ods-organization-code|RA4&practitioner=https://sider.nhs.uk/auth|{UserName}@ydh.nhs.uk")
`

### Contextual link icon
The icon to be used for the SIDeR contextual link was deliberated on with Tony Smith, CCIO at YDH at the time, whilst this was ongoing, with the final icon seen in the mockup below (the S with a stalk, in a circle):

<img src="https://raw.githubusercontent.com/Fdawgs/ydh-fhir-listeners/master/docs/images/YDH-TrakCare-SIDeR-Contextual-Link-Icon.png" width="800">

## Contextual link obfuscation
Refer to the the following pages in the SIDeR programme wiki for more information:
- [Interoperability patterns - Contextual launch](https://github.com/Somerset-SIDeR-Programme/SIDeR-interop-patterns/wiki/contextual-launch)
- [Security patterns - Query string obfuscation](https://github.com/Somerset-SIDeR-Programme/SIDeR-interop-patterns/wiki/query-string-obfuscation)

Source code and setup guidance for YDH's contextual link obfuscation service can be found here: [ydh-sider-obfuscation-service repo](https://github.com/Somerset-SIDeR-Programme/ydh-sider-obfuscation-service)