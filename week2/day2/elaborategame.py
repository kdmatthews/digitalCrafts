import random
import time

class Characters():
    def __init__(self, name, health, attack):
        self.name = name
        self.health = health
        self.attack = attack
        
    def eat(self):
        self.health += 10
    
    def take_damage(self):
        self.health -= 10

    def shield_failure(self):
        self.health -= 10
    
    def attack_player(self):
        self.attack -= 10
    
    def player_shielded(self):
        self.attack -= 5
    
    def attack_while_eating(self):
        self.health -= 5
        

grogu = Characters('Grogu', 50, 100)
mudhorn = Characters('Mudhorn', 50, 100)
mando = Characters('Mando', 100, 100)
moffGideon = Characters('Moff Gideon', 100, 100)


def rules():
    print("Welcome Space Traveler")
    time.sleep(2)
    print("You will begin our game by selecting the champions for the fight")
    time.sleep(3)
    print("When attacked by the enemy you will lose health. The first player to reach 0 health loses the game.")
    time.sleep(3)
    print("Players are limited to the amount of times they can attack. Each time you attack you lose attack points.")


def menu_grogu():
    print("""
    Choose what to do!
    1. Attack
    2. Eat frog
    3. Dodge
    4. Check Grogu Health
    5. Check Mudhorn Health""")

def menu_mando():
    print("""
    1. Attack Moff Gideon
    2. Eat Bone Soup to restore health
    3. Shield
    4. Check Mando's Stats
    5. Check Moff Gideon's Stats""")

def main_grogu():
    while grogu.health != 0 or mudhorn.health != 0:
        menu_grogu()
        user_choice = input("Please select your move!: ")
        if user_choice == "1":
            mudhorn.take_damage()
            grogu.attack_player()
            print("You have used the force on the Mudhorn! He has taken 10 damage.")
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
            print(grogu.attack)
        elif user_choice == '5':
            print(mudhorn.health)
            print(mudhorn.attack)
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
        menu_mando()
        user_choice = input("Please select your move!: ")
        if user_choice == "1":
            if mando.attack < 10:
                print("You do not have enough attack points to attack Moff Gideon.")
            else:
                random_number = random.randrange(11)
                if random_number < 7:
                    moffGideon.take_damage()
                    mando.attack_player()
                    print("You have used your Beskar Spear against Moff Gideon! He has taken 10 damage.")
                else:
                    mando.attack_player()
                    print("Moff Gideon dodged your attack.")
        elif user_choice == "2":
            random_number = random.randrange(11)
            if mando.health > 99:
                print("You are at maximum health!")
            elif random_number < 7:
                mando.eat()
                print("You have eaten bone broth. 10 has been added to your health!")
            else:
                mando.eat()
                mando.attack_while_eating()
                print("Moff Gideon got the jump on you while you were slurping your soup. Only 5 health points were gained.")
        elif user_choice == '3':
            random_number = random.randrange(11)
            if random_number < 5:
                mando.shield_failure()
                moffGideon.attack_player()
                print("You were not quick enough. Moff Gideon hit you with the Darksaber.You take 10 damage ")
            else:
                moffGideon.player_shielded()
                print("You were able to move out of the way. Moff Gideon struck a wall and lost 5 attack points.")
        elif user_choice == '4':
            print(mando.health)  
            print(mando.attack)
        elif user_choice == '5':
            print(moffGideon.health)
            print(moffGideon.attack)
        else:
            print("Please be sure to enter a number 1-5.")

    
        if mando.health == 0:
            print("Game Over! Moff Gideon has defeated you!")
            break
        elif moffGideon.health == 0:
            print("You have defeated Moff Gideon and now are the rightful owner of the DarkSaber")
            break

        
    return
def main():
    rules()
    game_choice = input("""
    Please select which characters you'd like to fight!
    You will play as Grogu or Mando. Game one is shorter than game two.
    1. Grogu vs. The Mudhorn 
    2. Mando vs. Moff Gideon.
    """)
    if game_choice == '1':
        main_grogu()
    elif game_choice == '2':
        main_mando()
    else:
        print("Please be sure to enter 1 or 2.")
    return
    
main()