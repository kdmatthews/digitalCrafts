# Conditionals
print("Welcome to this program")
firstName = input('What is your first name?')
#len determines the length of a string and returns an integer value
length_of_first_name = len(firstName)
print(length_of_first_name)
#if statement (conditional)
# if value compare to another value
if length_of_first_name <= 0:
    print("Please enter at least one character")
else:
    print(f"Hello {firstName}, welcome")
    #pass
