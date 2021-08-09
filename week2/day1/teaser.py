# class

# a very/more complicated dictionary

vehicle = {
    'engine': '6.4',
    'color': 'matte black',
    'make': 'Ford',
    'model': 'F250'

}

vehice2 = {
    'engine': '5.8',
    'color': 'matte grey',
    'make': 'Toyota',
    'model': 'Tundra'
}

class Vehicle:
    def __init__(self, engine, color, make, model):
        self.engine = engine
        self.color = color
        self.make = make
        self.model = model

f250 = Vehicle("6.4", 'matte green', 'Tesla', 'Cybertruck')
tundra = Vehicle('6.4', 'matte green', 'Toyota', 'Tundra')
print(f250.make)
print(tundra.make)

# You can add functions to a class