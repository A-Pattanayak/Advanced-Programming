#Aniket Pattanayak
#CSB24070
#Assignment-12



from abc import ABC, abstractmethod

class Order:
    def __init__(self, order_id, customer_name, amount):
        self.order_id = order_id
        self.customer_name = customer_name
        self.amount = amount

    def get_final_amount(self):
        return self.amount


class RegularOrder(Order):
    pass


class DiscountedOrder(Order):
    def get_final_amount(self):
        return self.amount * 0.9


class PriorityOrder(Order):
    def get_final_amount(self):
        return self.amount + 50

#-------------------------------------------------------------------------------    


class PaymentMethod(ABC):

    @abstractmethod
    def pay(self, amount):
        pass


class CreditCardPayment(PaymentMethod):
    def pay(self, amount):
        print(f"Paid ₹{amount} using Credit Card")


class UPIPayment(PaymentMethod):
    def pay(self, amount):
        print(f"Paid ₹{amount} using UPI")


class WalletPayment(PaymentMethod):
    def pay(self, amount):
        print(f"Paid ₹{amount} using Wallet")

#-------------------------------------------------------------------------------        


class NotificationChannel(ABC):

    @abstractmethod
    def send(self, customer_name, message):
        pass


class EmailNotification(NotificationChannel):
    def send(self, customer_name, message):
        print(f"Email sent to {customer_name}: {message}")


class SMSNotification(NotificationChannel):
    def send(self, customer_name, message):
        print(f"SMS sent to {customer_name}: {message}")


class PushNotification(NotificationChannel):
    def send(self, customer_name, message):
        print(f"Push notification sent to {customer_name}: {message}")

#-------------------------------------------------------------------------------


class OrderStorage(ABC):

    @abstractmethod
    def save(self, order):
        pass


class DatabaseStorage(OrderStorage):
    def save(self, order):
        print(f"Order {order.order_id} saved to Database")


class FileStorage(OrderStorage):
    def save(self, order):
        print(f"Order {order.order_id} saved to File")


#-------------------------------------------------------------------------------

class OrderService:

    def __init__(self, payment_method, notification_channel, storage):
        self.payment_method = payment_method
        self.notification_channel = notification_channel
        self.storage = storage

    def process_order(self, order):

        final_amount = order.get_final_amount()

        print(f"\nFinal Amount = ₹{final_amount}")

        self.payment_method.pay(final_amount)

        self.storage.save(order)

        self.notification_channel.send(
            order.customer_name,
            f"Your order {order.order_id} has been placed successfully."
        )

#------------------------------------------------------------------------------

        
order_id = int(input("Enter Order ID: "))
customer_name = input("Enter Customer Name: ")
amount = float(input("Enter Order Amount: "))

#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

print("\nSelect Order Type")
print("1. Regular Order")
print("2. Discounted Order")
print("3. Priority Order")

order_choice = int(input("Enter choice: "))


if order_choice == 1:
    order = RegularOrder(order_id, customer_name, amount)

elif order_choice == 2:
    order = DiscountedOrder(order_id, customer_name, amount)

elif order_choice == 3:
    order = PriorityOrder(order_id, customer_name, amount)

else:
    print("Invalid Choice")
    exit()

#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

print("\nSelect Payment Method")
print("1. Credit Card")
print("2. UPI")
print("3. Wallet")

payment_choice = int(input("Enter choice: "))


if payment_choice == 1:
    payment = CreditCardPayment()

elif payment_choice == 2:
    payment = UPIPayment()

elif payment_choice == 3:
    payment = WalletPayment()

else:
    print("Invalid Choice")
    exit()

#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
print("\nSelect Notification Method")
print("1. Email")
print("2. SMS")
print("3. Push Notification")

notification_choice = int(input("Enter choice: "))


if notification_choice == 1:
    notification = EmailNotification()

elif notification_choice == 2:
    notification = SMSNotification()

elif notification_choice == 3:
    notification = PushNotification()

else:
    print("Invalid Choice")
    exit()

#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

print("\nSelect Storage Type")
print("1. Database")
print("2. File")

storage_choice = int(input("Enter choice: "))


if storage_choice == 1:
    storage = DatabaseStorage()

elif storage_choice == 2:
    storage = FileStorage()

else:
    print("Invalid Choice")
    exit()


service = OrderService(payment, notification, storage)
service.process_order(order)