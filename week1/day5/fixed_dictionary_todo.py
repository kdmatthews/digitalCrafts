
task_list = []

while True:
    print ("""
    Press 1 to add a task
    Press 2 to delete a task
    Press 3 to view all tasks
    Press q to quit
    """)
    menu=input("What would you like to do?: ")
    if menu == '1':
        todo ={}
        title_input = input("Please input the title of the task.: ")
        priority_input = input("Please input the priority as 'high', 'medium', or 'low':")
        while priority_input != 'high' and priority_input != 'medium' and priority_input != 'low':
            priority_input = input("YOU MUST input the priority as 'high', 'medium', or 'low':")
        todo['title'] = title_input
        todo['priority'] = priority_input
        task_list.append(todo)
        print(f"I added {task_list} to your to do list.")
    elif menu == '2':
        for i, task_elements in enumerate(task_list):
            i += 1
            print('-----------------------------------------------')
            print(i, "%s --- %s " % (task_elements["title"], task_elements["priority"]))
        delete_task = int(input("Type the number of the task you would like to delete: "))
        del task_list[delete_task - 1]
    elif menu == '3':
        for i, task_elements in enumerate(task_list):
            i += 1
            print('-----------------------------------------------')
            print(i, "%s --- %s " % (task_elements["title"], task_elements["priority"]))
    elif menu == 'q':
        print("Have a nice day!")
        break
    else:
        print("Error! Please be sure to type '1', '2', '3', or 'q'")
