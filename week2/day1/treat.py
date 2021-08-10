class Treat:
    def __init__(self, fullness=10, happiness=10):
        self.fullness = fullness
        self.happiness = happiness
    
class ColdPizza(Treat):
    def __init__(self):
        super().__init__(15, 20)

class Bacon(Treat):
    def __init__(self):
        super().__init__(17, 30)

class VeganSnack(Treat):
     def __init__(self):
        super().__init__(5, 4)


