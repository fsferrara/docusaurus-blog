**Method Swizzling** in iOS is a powerful technique that allows you to change the implementation of an existing method at runtime. This can be particularly useful for modifying or extending the behavior of methods in frameworks or third-party libraries without subclassing or altering the original class.

## How Method Swizzling Works

Method swizzling involves exchanging the implementations of two methods. A basic example in Objective-C uses class functions (i.e. `class_getInstanceMethod()`, `class_addMethod()`, `class_replaceMethod()`) and the most important function: `method_exchangeImplementations()`.

Method swizzling is not a feature explicitly offered by iOS or Swift as a language feature. Instead, it leverages the Objective-C runtime, which is part of the underlying infrastructure of iOS.

## Method Swizzling in Swift

Method Swizzling in Swift is a technique that involves dynamically replacing the implementation of an existing method at runtime. Although it originated in Objective-C and is more common there due to the dynamic nature of the language, it can still be applied in Swift, especially when interacting with Objective-C code or using Swift classes that are compatible with Objective-C runtime.

## Things to Keep in Mind

- **Timing**: Swizzling should be done as early as possible, such as in `AppDelegate` or before the class is used.
- **Objective-C Runtime Dependency**: Swizzling relies on Objective-C’s runtime, so it only works with classes that are Objective-C compatible.
- **Avoid Overuse**: Method swizzling can lead to hard-to-track bugs, especially if used excessively or in production code.
