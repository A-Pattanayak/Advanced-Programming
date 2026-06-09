# Assignment 12

## Question

Design a system in Java or Python for processing customer orders in an e-commerce platform.

An order system should support:

- Multiple payment methods such as Credit Card, UPI, Wallet, etc.
- Multiple notification channels such as Email, SMS, Push
- Different order types such as Regular Order, Discounted Order, Priority Order
- Ability to store order data using different storage mechanisms such as Database, File, etc.

Design Constraints: Must apply SOLID Principles.

Your design must satisfy:

1. Single Responsibility Principle: each class should have a single responsibility.
2. Open/Closed Principle: add new payment methods and notification types without modifying existing classes.
3. Liskov Substitution Principle: all subclasses should work correctly through their base type.
4. Interface Segregation Principle: avoid large interfaces and design small role-specific interfaces.
5. Dependency Inversion Principle: high-level classes must depend on abstractions, not concrete implementations, using dependency injection.

Your system should:

- Create an order
- Process payment using a selected payment method
- Send notification after successful order
- Save order details using a storage mechanism
