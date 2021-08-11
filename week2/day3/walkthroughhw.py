
# grocery_store = {
#     Name: ""
#     address: ""
#     cart: [{name, price}]

# }
class GroceryStore():
    def __init__(self, title, address):
        self.title = title
        self.address = address
        
    # def add_list(self):
    #     self.title = input("Please enter the title for your list: ")
    #     shopping_list.append(self.title)
        # address_input = input("Please enter the address for your list: ")
        # shopping_list.append(ShoppingList(address_input))

        
class Cart:
    def __init__(self):
        self.contents = []


class GroceryItem():
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity


# kmart = GroceryStore('kmart', '123 kmart lane')
# kmartCart = Cart()
# kmart.addToCart(kmartCart)
# toothpaste = GroceryItem('Colgate', '2', 7)
# kmart.cart.contents.append(toothpaste)
# print(kmart.cart.contents[0].name)
# kmart.cart.contents.append(toothpaste)
# for items in kmart.cart.contents:
#     print(items.title, items.price)
# kmartCart.contents.append(toothpaste)
# print(kmartCart.contents[0].title)

menu = """
1. Create a shopping list.
2. Display your shopping list.
3. Add grocery item to your list.
"""

user_choice = ''
collectionOfCarts = []
collectionOfStores = []
while user_choice != 'q':
    user_choice = input("""
    1. Creat a store
    2. add item to store cart
    3. Display
    q quit 
    Please type the number for the task you'd like to run: """)
    if user_choice == "1":
        nameOfStore = input("what is the store name")
        addressOfStore = input('what is the store address')
        store = GroceryStore(nameOfStore, addressOfStore)
        print(f"OK I added {nameOfStore} at {addressOfStore}")
        collectionOfStores.append(store)
    if user_choice == "2":
        cart = Cart()
        itemName = input("what is the item called")
        itemPrice = input("what is the item price")
        itemQuantity = input("what is the quantity")
        itemAdded = GroceryItem(itemName, itemPrice, itemQuantity)
        cart.contents.append(itemAdded)
        collectionOfCarts.append(cart)



    if user_choice == "3":
        for cart in collectionOfCarts:
            for content in cart.contents:
                # print the name of store along side the class
                print(content.name)
                print(content.price)
                print(content.quantity)
    
    