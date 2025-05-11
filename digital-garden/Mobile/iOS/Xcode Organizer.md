Use the Xcode Organizer to view anonymized performance data from your app’s users, including launch times, memory usage, UI responsiveness, and impact on the battery. Use the data to tune the next version of your app and catch regressions that make it into a specific version of your app.

## Where is Xcode Organizer?

Xcode Organizer is a tool provided with Xcode.

- To open Xcode Organizer
    - In Xcode, choose Window > Organizer to open the Organizer window

In some cases, the pane shows “Insufficient usage data available” because there may not be enough anonymized data reported from participating user devices. When this happens, try checking back in a few days.

## Metrics and Reports

Xcode organizer let you analyze metrics/reports gathered from app releases and beta releases distributed with TestFlight.

Based on your [[Apple Developer Account]], the list of Apps you have access to is downloaded from [[App Store Connect]].

(!) In some cases, the pane shows “Insufficient usage data available” because there may not be enough anonymized data reported from participating user devices. When this happens, try checking back in a few days.

- Organizer menu
    - Products
        - Archives
    - Reports (those are direct reports from the apps)
        - Crashes
        - Disk Writes
        - Energy
        - Feedback
        - Hangs
    - Insights
        - Regressions
    - Metrics
        - Battery usage
        - Disk Writes (this is different from the one in reports)
        - Hang Rate
        - Launch Time
        - Memory
        - Scrolling
        - Terminations

## Related

- [Xcode Organizer](https://developer.apple.com/documentation/xcode/analyzing-the-performance-of-your-shipping-app)
- [[Apple Developer Program]]
- [[Apple ID]]
