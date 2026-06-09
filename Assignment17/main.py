from registration_service import (
    RegistrationService,
    InvalidEmailError,
    UnderageError
)

service = RegistrationService()

try:

    email = input("Enter email: ")
    age = int(input("Enter age: "))

    result = service.register_user(email, age)

    if result:
        print("Registration successful")

except InvalidEmailError as e:
    print("Email Error:", e)

except UnderageError as e:
    print("Age Error:", e)

except ValueError:
    print("Age must be a number")
