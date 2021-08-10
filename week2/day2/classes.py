# Intro to classes
# classes
# class is a complicated/more advanced dicationary that can huse information, methods (functions), 
# and can be replicated.

# list ["can", 123, {}]
#  dictionary {"key": "value"}
#  tuple (189878, 18980)
# You cannot make functions in the data types listed above

# def get_age():
#     JoesAge = 10
#     return JoesAge

# age = get_age()
# print(age)

# Joe = {
#     "name": "Joe",
#     "age": get_age(20)
# }
# Randy = {
#     "name": "Randy",
#     "age": get_age(45)
# }
# print(Joe)
# print(Randy)

# You define a class with the keyword class followed by the name of the class
# Scope - global and local
# google lexical scope

class Person:
    # A constructor, is the blueprint or skeloton or model in your class
    # You define the constructor like a function 
    # You will use the keywords __init__ as the name
    # Make sure you have your open and close () with keyword self (self)
    def __init__(self):
        self.name = "Joe"
        self.hairColor = "black"
        self.age = "unknown"
        self.ears = 2
        self.address = "123 Tomball St."
# first we must instantiate a class and assign it to a variable
joe = Person()
# To access unique attributes of that class we use . notation. Though if you want to get Britts name 
# you would use britt.name and so on.
print(joe.name)
print(joe.address)
justin = Person()
# Even though this is ising the same class we defined, this is a new instance
# justin exists somewhere else seperate on the computer and the computer will treat him uniquely 
print(justin.ears)
