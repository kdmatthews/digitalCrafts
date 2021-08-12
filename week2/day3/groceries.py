


shopping_list = []

menu = """
1. create shopping list
2. display shopping list
3. add grocery item to list
"""

class Grocery_Store():
    def __init__(self, title, address):
        self.title = title
        self.address = address
        self.items = []


    def add_item(self, item):
        self.items.append(item)

class Grocery_Item():
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity 



def menu():
    print("""
    1. Add Store
    2. Add Item to List
    3. Display List
    *Press q to quit*
    """)

stores = []

list_of_items = []

dictionary = {}
user_choice = ''

def main_menu():
    user_choice = ''
    while user_choice != 'q':
        menu()
        user_choice = input("Please type the number for the task you would like to do.: ")
        if user_choice == '1':
            title_input = input("What is the title of the store you would like to add?: ")
            address_input = input("What is the address of the store you would like to add?: ")
            grocery_store = Grocery_Store(title_input, address_input)
            stores.append(grocery_store)
            print(f"I have added {title_input} to your Grocery Stores.")
        if user_choice == '2':
            if len(stores) == 0:
                print("Please add a store first")
            else:
                for i, store in enumerate(stores):
                    i += 1
                    print(f"{i} - {store.title} ")
                user_selection = int(input("Enter the number for the store you would like to add items to."))
                if user_selection > 0 and user_selection <= len(stores):
                    selected_store = stores[user_selection -1]
                    item_name = input("Please enter item name: ")
                    item_price = input("Please enter item price: ")
                    item_quantity = input("Please enter item quantity: ")
                    new_item = Grocery_Item(item_name, item_price, item_quantity)
                    selected_store.add_item(new_item)
                else:
                    print("Please select a valid number: ")
        if user_choice == '3':
            for store in stores:
                print(f"Name of Store: {store.title}")
                for item in store.items:
                    print(f"Item: {item.name}, Price: {item.price}, Quanitity: {item.quantity} ")

        else:
            pass
    return


            

main_menu()
        