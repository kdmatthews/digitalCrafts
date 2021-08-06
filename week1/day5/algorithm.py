# 1 list practice
ogAvengers = ["Captain America", "Thor", "Iron Man", "Black Widow", "Hulk"]
ogAvengers.append('Hawkeye')
ogAvengers.remove('Iron Man')
ogAvengers.insert(1, 'Scarlett Witch')
print(ogAvengers)

# 2 FizzBuzz

# for numbers in range(0, 101):
#     if (numbers % 3 == 0) and (numbers % 5 == 0):
#         print('Fizz Buzz')
#     elif numbers % 3 == 0:
#         print('Fizz')
#     elif numbers % 5 == 0:
#         print('Buzz')
#     else:
#         print(numbers)

# 3 Moving Zeroes
array1 = [0,1,0,3,12]
array2 = [1,7,0,0,8,0,10,12,0,4]

# def movezeroes(array):
#     for numbers in range(len(array1)):
for num in array1:
    if num == 0:
        array1.remove(num)
        array1.append(num)
    else: 
        pass

for num in array2:
    if num == 0:
        array2.remove(num)
        array2.append(num)
    else:
        pass

print(array2)
print(array1)



