todo = {}
task_list = []
while True:
    print ("""
    Press 1 to add a task
    Press 2 to delete a task
    Press 3 to view all tasks
    Press q to quit
    """)
    menu=input("What would you like to do?\n")
    if menu == '1':
        title_input = input("Please input the title of the task.\n")
        priority_input = input("Please input the priority as 'high', 'medium', or 'low'.\n")
        todo = {title_input: priority_input}
        task_list.append(todo)
    elif menu == '2':
        for i, element in enumerate(task_list):
            print(i, element)
        delete_task = int(input("Type the number of the task you would like to delete: "))
        del task_list[delete_task]
    elif menu == '3':
        for i, element in enumerate(task_list):
            i += 1
            print(i, element)
    elif menu == 'q':
        print("Have a nice day!")
        break
    else:
        print("Error! Please be sure to type '1', '2', '3', or 'q'")
