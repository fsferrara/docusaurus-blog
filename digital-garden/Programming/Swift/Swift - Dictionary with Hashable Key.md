In Swift, a dictionary is a collection type that stores key-value pairs. It provides an efficient way to associate values with unique keys and retrieve those values later using the keys. Dictionaries are unordered, meaning the elements do not have a specific order.

The Swift dictionary type is called `Dictionary<Key, Value>`, or more commonly known as `[Key: Value]`. It uses a hash table implementation to provide fast lookup and retrieval of values based on their associated keys.

Implementation example:

```swift
// The Key should be Hashable
public struct Key: Hashable {
    public let rawValue: String

    public static let sampleKey = Key(rawValue: "sample_key")

    init(rawValue: String) {
        self.rawValue = rawValue
    }

    public func hash(into hasher: inout Hasher) {
        hasher.combine(rawValue)
    }

    public static func ==(lhs: Key, rhs: Key) -> Bool {
        return lhs.rawValue == rhs.rawValue
    }
}

struct Value {
    let key: Key
}

// a dictionary is a collection type that stores key-value pairs
var comps: [Key: Value] = [:]
```

Note. If you use language types as key (e.g. `String`), those ones already implements the `Hashable` protocol.
