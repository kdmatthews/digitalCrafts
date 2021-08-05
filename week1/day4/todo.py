menu=True 
while menu < 5:
    print ("""
    Press 1 to add a task
    Press 2 to delete a task
    Press 3 to view all tasks
    Press q to quit
    """)
    break
menu=input("What would you like to do?\n")

task_list = ['Wash the car', 'Mow the lawn', 'Walk the dog', 'Do the dishes']
if menu == '1':
    title_input = input("Please input the title of the task.\n")
    priority_input = input("Please input the priority as 'high', 'medium', or 'low'.\n")
    task_list.append(title_input)
elif menu == '2':
    for element in task_list:
        print(task_list.index(element, task_list))