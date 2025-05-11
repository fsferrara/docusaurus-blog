[Fastlane](https://fastlane.tools/) is App Automation done right 😀

Open-source tool designed to simplify and automate the deployment of mobile apps for both Android and iOS platforms. It helps developers streamline various tasks involved in the app release process. By automating these repetitive tasks, fastlane allows developers to focus more on coding and less on the logistics of app deployment.

- **Building and Testing**: Automates the build and test processes to ensure your app is ready for release.
- **Code Signing**: Manages code signing identities and profiles, making it easier to handle the complexities of app signing.
- **Beta Deployment**: Distributes beta builds to testers quickly and efficiently.
- **App Store Deployment**:Automates the submission of apps to the App Store and Google Play, including managing app metadata and screenshots.

## Technicalities

Fastlane is a tool you can install on your machine as a Ruby gem. It is a `gem "fastlane"` in your `Rubyfile`.

To execute it, use the command `bundle exec fastlane [lane]`. In this command, the "lane" parameter is defined int a special file: the `Fastfile`.

`Fastfile`: contains the list of script (aka "lane") we'd like to execute.
