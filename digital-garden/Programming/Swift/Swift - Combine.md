The **Combine Framework** provides a declarative Swift API for processing values over time. These values can represent many kinds of asynchronous events. Combine declares publishers to expose values that can change over time, and subscribers to receive those values from the publishers.

## SwiftUI and Combine

**SwiftUI** and **Combine** together provide _a powerful way to build reactive, data-driven UIs in Swift_!

- SwiftUI State and Binding
  - SwiftUI’s `@State` property wrapper allows you to manage local state within a view.
    - the `@State` attribute is used in SwiftUI to declare a property as stateful, enabling automatic synchronization with the user interface.
  - Combine’s `Binding` type connects this local state to external data sources.
    - ensure changes in the UI (e.g. a slider) are immediately updating the state variable and vice-versa.
    - SwiftUI `Bindings` establish a two-way connection between the UI and the state variables, enabling immediate updates in both directions.

## Similar framework

- Swift: RxSwift, ReactiveKit
- Kotlin: RxKotlin, Flow
- Java: RxJava, Reactor, Akka Streams

## Reference

[Official Documentation](https://developer.apple.com/documentation/combine)

