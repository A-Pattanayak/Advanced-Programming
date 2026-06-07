#CSB24070
#Aniket Pattanayak
#Purpose of program: Inventory analysis

items = [
    {"name": "Surfexcel", "stock": 15},
    {"name": "ParleG", "stock": 5},
    {"name": "Biskfarm Marie", "stock": 12},
    {"name": "Amul Taaza", "stock": 8},
    {"name": "Tata Namak", "stock": 3}
]

print("Low Stock (Less than 10):")
endangered = [product for product in items if product["stock"] < 10]
print(endangered)