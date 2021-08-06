menu=True 

task_list = []

while menu:
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
        task_list.append(title_input)
        todo = {title_input: priority_input}
        print("Here is your to do list: ")
        print(task_list)
    elif menu == '2':
        for i, element in enumerate(todo.items()):
            print(i, element)
        delete_task = int(input("Type the number of the task you would like to delete: "))
        del task_list[delete_task]
        print("Here is your new to do list: ")
        print(task_list)
    elif menu == '3':
        for i, l in enumerate(task_list):
            i += 1
            new_list = task_list.append(todo)
            print(i, new_list)
        # for title, priority in sorted(todo.items()):
        #     print(title, priority)
    elif menu == 'q':
        print("Have a nice day!")
        break
    else:
        print("Error! Be sure to type '1', '2', '3', or 'q'")

            