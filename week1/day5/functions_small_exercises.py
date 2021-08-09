# 1 Madlib Function
from typing import ItemsView


def madlib_function(name, subject):
    return (f"{name} is the student who scored the highest in {subject}.")

print(madlib_function('Jenny', 'math'))

# 2 Celsius to Fahrenheit conversion
def cel_to_far(celsisus):
    F = (celsisus * 9/5) + 32
    return (F)

print(cel_to_far(34))

# 3 Fahrenheit to Celsius conversion
def far_to_cel(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    return(celsius)

print(far_to_cel(93))

# 4 is_even function
def is_even(number):
    if number % 2 == 0:
        return True
    else:
        return False

print(is_even(76))
print(is_even(77))

# 5 is_odd function
def is_odd(number):
    even_check = is_even(number)
    if even_check is False:
        print("This is an odd number!")
    else:
        print("This is not an odd number!")
    return

print(is_odd(76))
print(is_odd(123))

# 6 is_even function
list = [7, 8, 12, 3 ,5 ,8]
new_list = []
new_list_odd = []

def only_evens(number_list):
    for number in number_list:
        even_check = is_even(number)
        if even_check == True:
            new_list.append(number)
        else:
            pass
    return(new_list)

print(only_evens(list))

def only_odds(number_list):
    for number in number_list:
        odd_check = is_even(number)
        if odd_check == False:
            new_list_odd.append(number)
        else: 
            pass
    return(new_list_odd)

print(only_odds(list))

