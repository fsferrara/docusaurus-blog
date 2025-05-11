Steps:
- Create an [[Apple Developer Account]]
    - [guide](https://www.kodeco.com/11678704-publishing-to-the-app-store/lessons/3)
- Set Up a Development Certificate
    - [guide](https://www.kodeco.com/11678704-publishing-to-the-app-store/lessons/4)
- Create a Development Certificate
    - [guide](https://www.kodeco.com/11678704-publishing-to-the-app-store/lessons/5)
- Establish a Development Profile
    - [guide](https://www.kodeco.com/11678704-publishing-to-the-app-store/lessons/6)

## Requirements

- The [[Apple ID]] should be configure in Xcode, so that it can download profiles from the [[Apple Developer Account]] console.


Developer Certificate -----------(provisioning profile)---------- Device


## Provisioning Profile 

A provisioning profile link a developer certificate to a specific device

The following example allows `Saverio Ferrara (XXXXXXXXXX)` to install the `TEAMID.com.my.application.name` application in the device with UDID `00000000-0000000000000000`:

```
"Application Name"
Expires In 11 months

App ID Name: 
"Application Name"
App ID: 
TEAMID.com.my.application.name
Team: 
"Team Name" (TEAMID)
Platform: 
iOS
UUID: 
...
Creation Date: 
...
Expiration Date: 
...


ENTITLEMENTS

...


CERTIFICATES

Name: 
Apple Development: Saverio Ferrara (XXXXXXXXXX)
Creation Date: 
...
Serial Number: 
...
SHA-1: 
...


PROVISIONED DEVICES

Device ID: 
00000000-0000000000000000
```