Variadic Parameters make it possible to pass zero or more values of a specific type into a function.

In the following example, the `add` methods has one variadic parameter (i.e. `_ newContent: Content...`):

```swift
struct Content {
    let title: String
}

struct Bucket {
    private(set) var content: [Content] = []
    
    mutating func add(_ newContent: Content...) {
        content.append(contentsOf: newContent)
    }
}
```

To the `add` method, we can pass in 0, 1, or more parameter of type `Content`.

Add only a single content item:

```swift
var bucket = Bucket()
bucket.add(Content(title: "Blog post 1"))
```

Add multiple items:

```swift
bucket.add(Content(title: "Blog post 2"), Content(title: "Blog post 3"))
```

## Array or Variadic Parameters?

What is the difference between `newContent: Content...` and `newContent: [Content]`?

Under the hood, a variadic argument translates the list of parameter into an `array`. In fact, the `add` method implementation we did in the example, treats it as an array.
We may boldly say that a variadic argument is only syntactic sugar.


## Reference

[How to use Variadic parameters in Swift](https://www.avanderlee.com/swift/variadic-parameters/)

