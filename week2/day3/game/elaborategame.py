class Characters():
    def __init__(self, name, health):
        self.name = name
        self.health = health
        
    def eat(self):
        self.health += 10
    
    def take_damage(self):
        self.health -= 10

    def shield_failure(self):
        self.health -= 10
    
        

grogu = Characters('Grogu', 50)
mudhorn = Characters('Mudhorn', 50)
mando = Characters('Mando', 100)
moffGideon = Characters('Moff Gideon', 100)







def menu():
    print("""
    Choose what to do!
    1. Attack
    2. Eat frog
    3. Dodge
    4. Check Grogu Health
    5. Check Mudhorn Health""")


def main_grogu():
    while grogu.health != 0 or mudhorn.health != 0:
        menu()
        user_choice = input("Please select your move!: ")
        if user_choice == "1":
            mudhorn.take_damage()
            print("You have used the force on the Mudhorn! He has taken 10 damage.")
            input("Press k to keep playing: ")
        elif user_choice == "2":
            if grogu.health < 50:
                grogu.eat()
                print("You have eaten a delicious frog and gained 10 health")
            else:
                print("You are at maximum health")
        elif user_choice == '3':
            grogu.shield_failure()
            print("You were not quick enough. You have been sprayed by the Mudhorn.You take 10 damage ")
        elif user_choice == '4':
            print(grogu.health)  
        elif user_choice == '5':
            print(mudhorn.health)
        else:
            print("Please be sure to enter a number 1-5.")
    
        if grogu.health == 0:
            print("Game Over! The Mudhorn has eaten you and destroyed the city")
            break
        elif mudhorn.health == 0:
            print("You did it! You have taken down the Mudhorn and saved the town")
            break

        
    return

def main_mando():
    while mando.health != 0 or moffGideon.health != 0:
        menu()
        user_choice = input("Please select your move!: ")
        if user_choice == "1":
            moffGideon.take_damage()
            print("You have used your Beskar Spear against Moff Gideon! He has taken 10 damage.")
            input("Press enter to keep playing: ")
        elif user_choice == "2":
            if mando.health < 50:
                mando.eat()
                print("You have eaten bone broth. 10 has been added to your health!")
                input("Press enter to keep playing: ")
            else:
                print("You are at maximum health")
                input("Press enter to keep playing: ")
        elif user_choice == '3':
            mando.shield_failure()
            print("You were not quick enough. Moff Gideon hit you with the Darksaber.You take 10 damage ")
            input("Press enter to keep playing: ")
        elif user_choice == '4':
            print(mando.health)  
            input("Press enter to keep playing: ")
        elif user_choice == '5':
            print(moffGideon.health)
            input("Press enter to keep playing: ")
        else:
            print("Please be sure to enter a number 1-5.")
            input("Press enter to keep playing: ")
    
        if grogu.health == 0:
            print("Game Over! Moff Gideon has defeated you!")
            break
        elif mudhorn.health == 0:
            print("You have defeated Moff Gideon and now are the rightful owner of the DarkSaber")
            break

        
    return
def main():
    print(""" 
    Welcome to the Mandolorian Season 2
    The Mudhorn is reaking havok on the town!
    It is your mission to stop the beast. 
    You are playing as the cute and adorable Grogu. 
    """)
    game_choice = input("""
    Please select which characters you'd like to fight!
    You will play as Grogu or Mando. Game one is shorter than game two.
    1. Grogu vs. The Mudhorn 
    2. Mando vs. Moff Gideon.""")
    if game_choice == '1':
        main_grogu()
    elif game_choice == '2':
        main_mando()
    else:
        print("Please be sure to enter 1 or 2.")
    return
    
main()