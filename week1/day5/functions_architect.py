#  Make sure your code includes a function bottleLine() that accepts a number (e.g. 99), 
# and returns a single line of the song (e.g., "99 bottles of ginger beer on the wall. 
# 99 bottles of ginger beer.")

def bottle_line(number):
    if number == 1:
        return(f"{number} bottle of ginger beer on the wall. {number} bottle of ginger beer.")
    elif number == 0:
        return(f"No bottles of ginger beer on the wall. No bottles of ginger beer.")
    else:
        return(f"{number} bottles of ginger beer on the wall. {number} bottles of ginger beer on the wall.")
    

print(bottle_line(13))

