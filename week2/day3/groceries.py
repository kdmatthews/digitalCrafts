


shopping_list = []

menu = """
1. create shopping list
2. display shopping list
3. add grocery item to list
"""

class GroceryStore():
    def __init__(self, title, address):
        self.title = title
        self.address = address




def main_menu():
    while True:
        print(menu)
        user_choice = int(input("Please type the number for the task you'd like to run: "))
        if user_choice == 1:
            ShoppingList.add_list()

            print(shopping_list)

main_menu()
        