Firebase Performance Monitoring automatically captures some performance data out-of-the-box, such as:
- your app start time (i.e., the load time for your first Activity only)
- screen rendering performance (i.e., slow and frozen frames for Activities but not for Fragments).
However, industry apps usually don't have lots of Activities but rather one Activity and multiple Fragments. Also, many apps usually implement their own Custom Views for more complex use cases. So it's often useful to understand how to measure the load time and screen rendering performance of both Activities and Fragments by instrumenting custom code traces in your app.

## References

- [Measure load time and screen rendering with Firebase Performance Monitoring](https://firebase.google.com/codelabs/measure-android-view-performance)

