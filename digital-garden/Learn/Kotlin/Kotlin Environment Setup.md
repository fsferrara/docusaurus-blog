In this article, we will see how to setup the environment for Kotlin on command line compiler.

## Prerequisite to install Kotlin

Kotlin runs on Java Virtual Machine, so it is necessary to install JDK and set the path in local system environment variable. Usually a JDK installation defines a `JAVA_HOME` env variable and then puts the binary forlder in the path. For example, on my mac I have:

```shell
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
export PATH=${JAVA_HOME}/bin:${PATH}
```
## Install Kotlin

To write and execute code written in Kotlin, you will need its **runtime** and the **compiler**. Every runtime release comes with its own compiler version. To get your hands on it, navigate to [github](https://github.com/JetBrains/kotlin/releases), pick a release, scroll to the bottom of the page, and download and unpack the ZIP archive, `kotlin-compiler-<version>.zip`.
At the time of writing, the latest _stable_ release is [Kotlin 1.5.10](https://github.com/JetBrains/kotlin/releases/tag/v1.5.10)

Once extracted the kotlin release, configure your shell path to include the kotlin binaries. For example:

```shell
export KOTLIN_HOME="${HOME}/tools/kotlinc"
export PATH=${PATH}:${KOTLIN_HOME}/bin
```

## Test the installation

Restar the shell, and issue `kotlinc -version`. You'll have something like this:

```
➜  ~ kotlinc -version
info: kotlinc-jvm 1.5.10 (JRE 11.0.10+9)
```

Good, you have now the Kotlin compiler installed. Let' try the classic hello-world example now.
Create `HelloWorld.kt` with this content:

```kotlin:HelloWorld.kt 
fun main(args: Array<String>) {
   println("Hello, World!")
}
```

To compile it use `kotlinc HelloWorld.kt -include-runtime -d HelloWorld.jar`. The `-include-runtime` parameter tells the compiler to include the Kotlin runtime in the resulting jar file. It is needed to run your program.

So, to recap, you need the Kotlin **runtime** and **compiler**!
