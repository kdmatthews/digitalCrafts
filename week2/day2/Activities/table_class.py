class Table:
    def __init__(self, height, width, color):
        self.height = height
        self.width = width
        self.color = color


bigTable = Table("60inches", '500 inches', 'black')
smallTable = Table("20 inches", "15inches", 'purple')

print(bigTable.color)
print(smallTable.width)