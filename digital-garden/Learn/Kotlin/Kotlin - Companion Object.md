ref: [Companion object in Kotlin](https://blog.mindorks.com/companion-object-in-kotlin) 

## Companion object in Kotlin
In Kotlin or any other programming language like Java and C#, whenever we want to call the method or whenever we want to access the members of a class then we make the object of the class and with the help of that object, we access the members of the class. A typical Kotlin example of the same is:

```java
class ToBeCalled {
    fun callMe() = println("You are calling me :)")
}
fun main(args: Array<String>) {     
    val obj = ToBeCalled()
    
    // calling callMe() method using object obj
    obj.callMe()
}
```

In the above example, we are calling the callMe() method of the ToBeCalled class by creating one object of the ToBeCalled class and then with the help of that object, the callMe() method is called.

### The static keyword
In some languages like Java and C#, we use static keyword to declare the members of the class and use them without making any object i.e. just call them with the help of class name.

```java
public class MyClass {

    public static void myMethod() {
        // do something
    }

}
```

So, to call a method named myMethod() having a class name as MyClass, we will use:

```java
MyClass.myMethod();
```

But can we do the same i.e. call the members of the class with the help of class name in Kotlin? The answer is yes, but the approach is different. There is nothing called static in Kotlin. So, in Kotlin, we use a companion object. Let’s see how can we achieve this.


### Companion object
In Kotlin, if you want to write a function or any member of the class that can be called without having the instance of the class then you can write the same as a member of a companion object inside the class. So, by declaring the companion object, you can access the members of the class by class name only(which is without explicitly creating the instance of the class).

To create a companion object, you need to add the companion keyword in front of the object declaration.

```kotlin
class CompanionClass {

    companion object CompanionObject {

    }
}

val obj = CompanionClass.CompanionObject
```

Also, we can remove the CompanionObject name and in place of the CompanionObject name, we can use the keyword companion i.e. the default name of the companion object will be Companion, like below:

```kotlin
class CompanionClass {

    companion object {

    }
}

val obj = CompanionClass.Companion
```

So, following is the example of a companion object in Kotlin:

```kotlin
class ToBeCalled {
    companion object Test {
        fun callMe() = println("You are calling me :)")
    }
}
fun main(args: Array<String>) {
    ToBeCalled.callMe()
}
```

The output of the above code is “ You are calling me :) ”

Similarly, you can put some variables in the companion object and access it with the help of the class name. The following is an example of the same:

```kotlin
class ToBeCalled {
    companion object Test {
        var someInteger: Int = 10
        fun callMe() = println("You are calling me :)")
    }
}

fun main(args: Array<String>) {
    print(ToBeCalled.someInteger)
}
```

Note: We can remove the Test name from the above code, it will become like below:

```kotlin
class ToBeCalled {
    companion object {
        var someInteger: Int = 10
        fun callMe() = println("You are calling me :)")
    }
}

fun main(args: Array<String>) {
    print(ToBeCalled.someInteger)
}
```

This is all about the companion object in Kotlin.
