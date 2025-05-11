A **stack trace** is a report that shows the sequence of function calls that led to a specific point in a program’s execution. It’s often used for debugging because it helps identify where an error occurred and the path the program took to get there.

- _Call Stack_: When a program runs, it keeps track of function calls in a structure called the call stack. Each function call adds a new frame to the stack.
- _Error Occurrence_: If an error happens, the stack trace captures the current state of the call stack, showing the sequence of function calls that led to the error.

The stack trace lists the function calls in reverse order, starting with the most recent call. This helps developers trace back through the code to find the source of the error.
