Xcode exports `.dSYM` files to `$DWARF_DSYM_FOLDER_PATH` at the end of your application’s build. Ensure that the `DEBUG_INFORMATION_FORMAT` build setting is set to **DWARF with dSYM File**. By default, Xcode projects only set `DEBUG_INFORMATION_FORMAT` to **DWARF with dSYM File** for the Release project configuration.

```diff
-DEBUG_INFORMATION_FORMAT = dwarf
+DEBUG_INFORMATION_FORMAT = dwarf-with-dsym
```
