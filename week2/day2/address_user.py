
class Address:
    def __init__(self, street, city, state, zip_code):
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code

class User(Address):
    def __init__(self, street, city, state, zip_code, first_name, last_name, addresses):
        super().__init__(street, city, state, zip_code)
        self.first_name = first_name
        self.last_name = last_name
        self.addresses = []
    
    
    def add_address(self, address):
        self.addresses.append(address)
    
    def display_addresses(self):
        print(self.addresses)
    

kayla = User('212 S Dakota', 'tampa', 'fl', 33606, 'kayla', 'matthews', [])
kayla.add_address("312 blvd avenue")
kayla.add_address('435 Brooklen drive')
# print(kayla.addresses)
kayla.display_addresses()