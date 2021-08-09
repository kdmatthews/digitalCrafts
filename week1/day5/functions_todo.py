task_list = []

def welcome():
    message = ("""
    Press 1 to add a task
    Press 2 to delete a task
    Press 3 to view all tasks
    Press q to quit
    """)
    print(message)
    return

    # menu=input("What would you like to do?: ")
    # :
def add_task():
    todo ={}
    title_input = input("Please input the title of the task.: ")
    priority_input = input("Please input the priority as 'high', 'medium', or 'low':")
    while priority_input != 'high' and priority_input != 'medium' and priority_input != 'low':
        priority_input = input("YOU MUST input the priority as 'high', 'medium', or 'low':")
    todo['title'] = title_input
    todo['priority'] = priority_input
    task_list.append(todo)
    return (f"I added {task_list} to your to do list.")

def delete_task():
    for i, task_elements in enumerate(task_list):
        i += 1
        print('-----------------------------------------------')
        print(i, "%s --- %s " % (task_elements["title"], task_elements["priority"]))
    delete_task = int(input("Type the number of the task you would like to delete: "))
    del task_list[delete_task - 1]
    return

def view_task():
    for i, task_elements in enumerate(task_list):
        i += 1
        print('-----------------------------------------------')
        print(i, "%s --- %s " % (task_elements["title"], task_elements["priority"]))
    return

    
def menu_choice(user_choice):
    user_selection = ''
    if(user_choice == '1'):
        user_selection = add_task()
    elif(user_choice == '2'):
        user_selection = delete_task()
    elif(user_choice == '3'):
        user_selection = view_task()
    elif(user_choice == 'q'):
        return 'q'
    else:
        print("Error! Please be sure to type '1', '2', '3', or 'q'")
    return user_selection

  
choice = ""
while(choice != 'q'):
    welcome()
    user_input = input("What would you like to do?: ")
    choice = menu_choice(user_input)
