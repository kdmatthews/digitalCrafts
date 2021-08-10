

class User:
    def __init__(self, first_name, last_name, addresses):
        self.first_name = first_name
        self.last_name = last_name
        self.addresses = []

    def add_address(self, address):
        addresses = self.addresses.append(address)
    
    def display_addresses(self):
        print(self.addresses)
    

class Address(User):
    def __init__(self, first_name, last_name, street, city, state, zip_code, addresses):
        super().__init__(first_name, last_name, addresses)
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code

kayla = Address('kayla', 'matthews', '212 s dakota', 'tampla', 'fl', 33606, '513 hello')
print(kayla.addresses)
kayla.add_address("312 blvd avenue")
kayla.add_address('435 Brooklen drive')
print(kayla.addresses)
kayla.display_addresses()
    
    
   