first_number = int(input("Please type a number.\n"))
operand = input("Please enter an operand. Make sure it is one of the following: +, -, *, /.\n")
second_number = int(input("Please type a second number.\n"))



if operand == '+':
    print(first_number + second_number)
elif operand == '*':
    print(first_number * second_number)
elif operand == '-':
    print(first_number - second_number)
elif operand == '/':
    if second_number == 0:
        print('You cannot divide by zero')
    else:
        print(first_number / second_number)    
else:
    print('Please be sure to use an operand.')


