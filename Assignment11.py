from abc import ABC, abstractmethod


class LibraryItem(ABC):
    item_count = 0

    def __init__(self, title, year=2026):
        self.title = title
        self.year = year
        LibraryItem.item_count += 1

    @abstractmethod
    def displayInfo(self):
        pass

    @staticmethod
    def getItemCount():
        return LibraryItem.item_count


class Book(LibraryItem):
    def __init__(self, title, year=2026, author="Unknown"):
        super().__init__(title, year)
        self.author = author

    def displayInfo(self):
        print("Book Title:", self.title)
        print("Year:", self.year)
        print("Author:", self.author)


class DVD(LibraryItem):
    def __init__(self, title, year=2026, duration=0, genre="Unknown"):
        super().__init__(title, year)
        self.duration = duration
        self.genre = genre

    def displayInfo(self):
        print("DVD Title:", self.title)
        print("Year:", self.year)
        print("Duration:", self.duration, "minutes")
        print("Genre:", self.genre)


items = [
    Book("Clean Code", 2008, "Robert C. Martin"),
    Book("Python Basics"),
    DVD("Inception", 2010, 148, "Sci-Fi"),
    DVD("Documentary")
]

for item in items:
    item.displayInfo()
    print()

print("Total Library Items:", LibraryItem.getItemCount())