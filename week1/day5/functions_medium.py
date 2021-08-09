#  1 Find the smallest number
list = [3, 9, 120, 54, 1, 34, 87]
def smallest(list_of_numbers):
    return min(list_of_numbers)

print(smallest(list))

#  2 Find the largest number
def largest(list_of_numbers):
    return max(list_of_numbers)

print(largest(list))

# 3 Find the shortest string
string_list = ['Hello', 'How are you', 'Where are you from']
def shortest(string_in_list):
    return (min(string_in_list, key=len))


print(shortest(string_list))

# 4 Find the longest string
def longest(string_in_list):
    return (max(string_in_list, key=len))

print(longest(string_list))