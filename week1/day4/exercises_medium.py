#  1 Multiply Vectors
# list1 = [2, 4, 6, 67, 54]
# list2 = [3, 7, 9, 10, 0]
# list3 = []

# for num1, num2 in zip(list1, list2):
#     list3.append(num1 *num2)

# print(list3)

# 2 matrix addition
# matrix = [ [2, -2],
#    [5, 3] ]
# matrix2 = [ [3, 4], [6, 7] ] 
# matrix3 = []

# for list1, list2 in zip(matrix, matrix2):
#     for num1, num2 in zip(list1, list2):
#         matrix3.append(num1 + num2)
    

# print(matrix3)

# # 3 Matrix addition 2
# for i in range(len(matrix)):
#     matrix3.append([])
#     for j in range(len(matrix2)):
#         matrix3[i].append(matrix[i][j] + matrix2[i][j])

# print(matrix3)

# 4 de-dup
# 
# 6 long long vowels
words = "cheese is good"
cheese = list(words)

for i in range(len(cheese)):
    if cheese[i] == 'a':
        cheese[i] = 'aaaaa'
    elif cheese[i] == 'e':
        cheese[i] = 'eeeee'
    elif cheese[i] == 'i':
        cheese[i] = 'iiiii'
    elif cheese[i]== 'o':
        cheese[i] = 'ooooo'
    elif cheese[i] == 'u':
        cheese[i] = 'uuuuu'
    else:
        pass
cheese2 = "".join(cheese)
print(cheese2)