# We access list contexts via index

restaurant = {
    "name": "Pizza Hut",
    "address": "Stables Town Center",
    "phone": "123-123-1232"
}

Xavier = {
    "name": "Xavier",
    "height": "5-10"
}

Brande = {
    "name": "Brande",
    "height": "5-8"
}
# print(restaurant["name"])
# print(restaurant["address"])
# print(Xavier["name"])
# print(Brande["height"])
# print(Xavier.values())
# print(Xavier.get("pet", []))
# print(Xavier.get("pet"))
# You cannot acces a key that does not exist.
# You access the values of a dictionary via a key. 
# Key is always related to the value. All keys relate to dictionary variable .ie restaurant

JoesFavoriteCars = {
    "carList": ["Bmw", "audi", "Shelby Cobra", "Porsche"],
    "JoesBankBalance": {
        "currentBalance": "50",
        "dreamBalance": "infinity",
        "joesStonks": {
            "TSLA": "5",
            "MSFT": 20
        }
    }
}
print(JoesFavoriteCars.get("carList")[3])
print(JoesFavoriteCars.get("JoesBankBalance"))
print(JoesFavoriteCars["carList"][0])
print(str(JoesFavoriteCars["JoesBankBalance"]["joesStonks"]["MSFT"]))
print(JoesFavoriteCars["JoesBankBalance"]["joesStonks"][str("MSFT")])
for car in JoesFavoriteCars["carList"]:
    print(car)
