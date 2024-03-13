from math import radians, sin,cos, acos
# class User:
#     def __init__(self, name, phone):
#         self.name = name
#         self.phone = phone
#     def show(self):
#         print(f'{self.name} => {self.phone}')
        
# class Friend(User):
#     def show(self):
#         print(f'NAME: {self.name} || PHONE: {self.phone}')
class Point:
    def __init__(self, latitude, longitude):
        self.latitude = latitude
        self.longitude = longitude
    def distance(self, other):
        cos_d = sin(self.latitude) * sin(other.latitude) + cos(self.latitude) * cos(other.latitude) * cos(self.longitude - other.longitude)
        return 6371 * acos(cos_d)
class City(Point):
    def __init__(self, latitude, longitude, name, population):
        super().__init__(latitude, longitude)
        self.name = name
        self.population = population
    def show(self):
        print(f'Gorod {self.name}, Naselenie {self.population} ')
class Mountain(Point):
    def __init__(self, latitude, longitude, name, height):
        super().__init__(latitude, longitude)
        self.name = name
        self.height = height
    def show(self):
        print(f'Nazvanie gory: {self.name} Visota gori: {self.height}')
Moskva = City(55.7522, 37.6156, "Moscow", 11999054)
Everest = Mountain(27.5917, 86.5531, "Everest", 8848)
Moskva.show()
Everest.show()
print(Moskva.distance(Everest)- Everest.height)
