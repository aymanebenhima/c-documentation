# Booleans

In C, boolean values represent true and false. Unlike some other programming languages, C does not have a built-in boolean type, but it can be implemented using integers.

## Using Integers as Booleans

In C, `0` is considered `false`, and any non-zero value is considered `true`.

Example:
```c
int isTrue = 1;  // true
int isFalse = 0; // false

if (isTrue) {
    printf("This is true.\n");
}

if (!isFalse) {
    printf("This is false.\n");
}
```