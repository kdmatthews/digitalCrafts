class Table:
    def __init__(self, height, width, color, shape):
        self.height = height
        self.width = width
        self.color = color
        self.shape = shape


bigTable = Table("60inches", '500 inches', 'black')
smallTable = Table("20 inches", "15inches", 'purple')

print(bigTable.color)
print(smallTable.width)