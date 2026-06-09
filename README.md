# Assignment 9

## Question

Design a banking system in Java with:

- A base class Account containing private fields: accountNumber, ownerName, balance
- Provide getters/setters and at least two constructors using constructor chaining
- Implement deposit() and withdraw() with proper validation
- Add a display() method

Extend it with:

- SavingsAccount: add interestRate, override display(), and show interest
- CurrentAccount: add overdraftLimit and restrict withdrawals accordingly

Your implementation should clearly show:

- Proper encapsulation with no direct field access
- Constructor overloading and chaining using this(...)
- Inheritance and method overriding using @Override and super
- Polymorphism by storing objects in an Account reference list and calling display()
- Basic validation/debugging using assert or exceptions for invalid operations
