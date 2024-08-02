# Operators

Operators are symbols that perform operations on variables and values. In this chapter, we'll cover the basic operators in C.

## Arithmetic Operators

Perform basic arithmetic operations.

- **+**: Addition
- **-**: Subtraction
- **\***: Multiplication
- **/**: Division
- **%**: Modulus (remainder)

Example:
```c
int a = 10;
int b = 5;
int sum = a + b;  // 15
int difference = a - b;  // 5
int product = a * b;  // 50
int quotient = a / b;  // 2
int remainder = a % b;  // 0
```

## Relational Operators

Compare two values and return a boolean result.

- **==**: Equal to
- **!=**: Not equal to
- **>**: Greater than
- **<**: Less than
- **>=**: Greater than or equal to
- **<=**: Less than or equal to

Example:
```c
int x = 10;
int y = 5;
int result;

result = (x == y);  // 0 (false)
result = (x != y);  // 1 (true)
result = (x > y);   // 1 (true)
result = (x < y);   // 0 (false)
result = (x >= y);  // 1 (true)
result = (x <= y);  // 0 (false)
```

## Logical Operators

Used to combine multiple boolean expressions.

- **&&**: Logical AND
- **||**: Logical OR
- **!**: Logical NOT

Example:
```c
int a = 1;
int b = 0;
int result;

result = (a && b);  // 0 (false)
result = (a || b);  // 1 (true)
result = !a;        // 0 (false)
```

## Assignment Operators

Assign values to variables.

- **=**: Simple assignment
- **+=**: Add and assign
- **-=**: Subtract and assign
- ***=**: Multiply and assign
- **/=**: Divide and assign
- **%=**: Modulus and assign

Example:
```c
int a = 10;
a += 5;  // 15
a -= 3;  // 12
a *= 2;  // 24
a /= 4;  // 6
a %= 3;  // 0
```

