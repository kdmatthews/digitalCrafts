class Person:
    # A constructor, is the blueprint or skeloton or model in your class
    # You define the constructor like a function 
    # You will use the keywords __init__ as the name
    # Make sure you have your open and close () with keyword self (self)
    def __init__(self, lifePoints, name, hairColor, age, ears, address):
        self.lifePoints = lifePoints
        self.name = name
        self.hairColor = hairColor
        self.age = age
        self.ears = ears
        self.address = address

    def changeHairColor(self, colorToChangeItTo):
        self.hairColor = colorToChangeItTo
        # functions inside of classes are called methods
    
    def takeDamage(self, damageAmount):
        self.lifePoints -= damageAmount



britt = Person(10, "Britt", "Blondeish", 20, 2, "123 main st")
# We can invoke methods that are on a class by calling them with . notation
# print(britt.name)
# print(britt.hairColor)
# # justin = Person("Justin", "Brown", "20", 2, "123 s main st")
# # print(justin.name)
# britt.changeHairColor("blue")
# print(britt.hairColor)

# Code to show someone how "take damadge" and we can run a scenario based on class attribute
# while True:
#     britt.takeDamage(1)
#     if britt.lifePoints != 0:
#         # britt.takeDamage(1)
#         # print(britt.lifePoints)
#         # britt.takeDamage(1)
#         # print(britt.lifePoints)
#         # britt.takeDamage(1)
#         # print(britt.lifePoints)
#         # britt.takeDamage(1)
#         # print(britt.lifePoints)
#         print("keep fighting")
#     else: 
#         print("RIP Britt")
#         break

# Inheritance
# Person
class Athlete(Person):
    # 6.1
    # vertical jump
    # sport
    def __init__(self, lifePoints, name, hairColor, age, ears, address, height, vertical, sport):
        # In order to inherit the init function of the parent class, we use super(). whatever we want to inherit, .__init__()
        super().__init__(lifePoints, name, hairColor, age, ears, address)
        self.height = height
        self.vertical = vertical
        self.sport = sport
        # super().__init__(lifePoints, name, hairColor, age, ears, address)
    
    def playSports(self):
        print("I play " + self.sport)


timothy = Athlete(20, "Timothy", "black", 20, 2,
                  "123 w main st", "6.1", "36", "basketball")

timothy.changeHairColor('red')
print(timothy.hairColor)