#Aniket Pattanayak
#CSB24070


import sys
import gc


class Node:
    def __init__(self, name):
        self.name = name
        self.link = None

    def __repr__(self):
        return f"Node({self.name})"


gc.disable()

print("=== Creating Nodes ===")


A = Node("A")
B = Node("B")


A.link = B
B.link = A

print("Cycle created:")
print("A ->", A.link)
print("B ->", B.link)

print("\n=== Reference Counts ===")


print("Reference count of A:", sys.getrefcount(A))
print("Reference count of B:", sys.getrefcount(B))

a_id = id(A)
b_id = id(B)

print("\n=== Deleting Variables ===")

del A
del B

print("Variables A and B deleted.")

print("\n=== Investigating Memory ===")


found_a = False
found_b = False

for obj in gc.get_objects():
    if id(obj) == a_id:
        found_a = True
    if id(obj) == b_id:
        found_b = True

print("Is Node A still in memory?", found_a)
print("Is Node B still in memory?", found_b)

print("\nEven though we cannot access A or B anymore,")
print("they are still alive because of the circular reference.")

print("\n=== Garbage Collection ===")


collected = gc.collect()

print("Unreachable objects collected:", collected)

print("\n=== Final Check ===")

found_a = False
found_b = False

for obj in gc.get_objects():
    if id(obj) == a_id:
        found_a = True
    if id(obj) == b_id:
        found_b = True

print("Is Node A still in memory?", found_a)
print("Is Node B still in memory?", found_b)


gc.enable()