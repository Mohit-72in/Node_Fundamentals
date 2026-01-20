
# Node_Fundamentals
types of Error :
1> syntaxError : syntax Error is defined error happend while writing code for ex missing semicolon, missing curly braces etc
2> runtimeError : A runtime error is an error that occurs while a program is running, after it has been successfully compiled, causing the program to crash or behave unexpectedly.
- Runtime errors happen during program execution due to invalid operations or unexpected conditions.

int a = 10;
int b = 0;
int result = a / b;   // Runtime Error: ArithmeticException
Why? Division by zero happens during execution, not at compile time.
arr = [1, 2, 3]
print(arr[5])   # Runtime Error: IndexError

# Logical Error:
A logical error is an error where the program runs without crashing but produces incorrect output due to wrong logic or algorithm.
Logical errors do not stop execution but lead to incorrect results. and Hard to debug
int a = 10, b = 5;
int sum = a - b;   // Logical error (should be a + b)
System.out.println(sum);
Why? The code executes successfully but gives the wrong result.

