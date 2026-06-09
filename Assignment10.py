class Address:
    def __init__(self, street, city, zipCode):
        self.street = street
        self.city = city
        self.zipCode = zipCode

    def display(self):
        print("Street:", self.street)
        print("City:", self.city)
        print("Zip Code:", self.zipCode)


class Student:
    def __init__(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address
        self.course_list = []

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, age):
        if age <= 0:
            raise ValueError("Age must be greater than 0")
        self._age = age

    def add_course(self, course):
        if not course:
            raise ValueError("Course name cannot be empty")
        self.course_list.append(course)

    def display(self):
        print("Name:", self.name)
        print("Age:", self.age)
        print("Address:")
        self.address.display()
        print("Courses:", self.course_list)


class ScholarshipStudent(Student):
    def __init__(self, name, age, address, scholarshipAmount):
        super().__init__(name, age, address)
        self.scholarshipAmount = scholarshipAmount

    def display(self):
        super().display()
        print("Scholarship Amount:", self.scholarshipAmount)


address = Address("MG Road", "Bangalore", "560001")

student = Student("Ravi", 20, address)
student.add_course("Python")
student.add_course("Data Structures")

scholarship_student = ScholarshipStudent("Anita", 21, address, 50000)
scholarship_student.add_course("Machine Learning")
scholarship_student.add_course("AI")

student.display()
print()

scholarship_student.display()