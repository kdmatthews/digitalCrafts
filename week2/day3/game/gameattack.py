import random
import time

class Characters():
    def __init__(self, name, health, attack):
        self.name = name
        self.health = health
        self.attack = attack
        
    def eat(self):
        self.health += 10
    
    def health_damage(self):
        self.health -= 10

    
    def attack_damage(self):
        self.attack -= 10
    
    
    def hide(self):
        self.attack += 10

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
    2. Eat Frog
    3. Shield
    4. Hide
    5. Check Grogu Stats
    6. Check Mudhorn Stats""")

def menu_mando():
    print("""
    1. Attack Moff Gideon
    2. Eat Bone Soup
    3. Shield
    4. Hide
    5. Check Mando's Stats
    6. Check Moff Gideon's Stats""")

def main_grogu():
    while grogu.health != 0 or mudhorn.health != 0:
        menu_grogu()
        user_choice = input("Please select your move!: ")
        if user_choice == "1":
            if grogu.attack < 10:
                print("You do not have enough energy left to attack. You should find a place to hide.")
                time.sleep(2)
            else:
                mudhorn.health_damage()
                grogu.attack_damage()
                print("You have used the force on the Mudhorn! He has taken 10 damage.")
                time.sleep(2)
        elif user_choice == "2":
            if grogu.health < 50:
                grogu.eat()
                print("You have eaten a delicious frog and gained 10 health")
                time.sleep(2)
            else:
                print("You are at maximum health")
                time.sleep(2)
        elif user_choice == '3':
            if mudhorn.attack > 10:
                grogu.health_damage()
                mudhorn.attack_damage()
                print("You were not quick enough. You have been smooshed by the Mudhorn.You take 10 damage ")
                time.sleep(2)
            else:
                print("You used the force to keep the Mudhorn at bay.")
                time.sleep(2)
        elif user_choice == '4':
            if grogu.attack >= 40:
                print("Your cuteness is impossible to hide. The mudhorn has spotted you.")
                time.sleep(2)
            else:
                grogu.hide()
                mudhorn.attack_damage()
                print("You have successfully hidden behind Mando. While resting you recovered 10 attack points.")
                time.sleep(2)
        elif user_choice == '5':
            print(grogu.health)  
            print(grogu.attack)
            time.sleep(2)
        elif user_choice == '6':
            print(f"Health: {mudhorn.health}")
            print(f"Attack: {mudhorn.attack}")
            time.sleep(2)
        else:
            print("Please be sure to enter a number 1-5.")
            time.sleep(1)
    
        if grogu.health == 0:
            print("Game Over! The Mudhorn has eaten you.")
            break
        elif mudhorn.health == 0:
            print("You did it! You have demloshed the Mudhorn. The force is strong with you.")
            break

        
    return

def main_mando():
    while mando.health != 0 or moffGideon.health != 0:
        menu_mando()
        user_choice = input("Please select your move!: ")
        if user_choice == "1":
            if mando.attack < 10:
                print("You do not have enough attack points to attack Moff Gideon. You should find a place to hide.")
                time.sleep(2)
            else:
                random_number = random.randrange(11)
                if random_number < 5:
                    moffGideon.health_damage()
                    mando.attack_damage()
                    print("You have used your Beskar Spear against Moff Gideon! He has taken 10 damage.")
                    time.sleep(2)
                else:
                    mando.attack_damage()
                    print("Moff Gideon dodged your attack.")
                    time.sleep(2)
        elif user_choice == "2":
            random_number = random.randrange(11)
            if mando.health > 99:
                print("You are at maximum health!")
                time.sleep(2)
            elif random_number < 6:
                mando.eat()
                print("You have eaten bone broth. 10 has been added to your health!")
                time.sleep(2)
            else:
                mando.health_damage()
                print("Moff Gideon got the jump on you while you were slurping your soup. 0 health points were gained.")
                time.sleep(2)
        elif user_choice == '3':
            random_number = random.randrange(11)
            if moffGideon.attack > 10:
                if random_number < 6:
                    mando.health_damage()
                    moffGideon.attack_damage()
                    print("You were not quick enough. Moff Gideon hit you with the Darksaber.You take 10 damage. ")
                    time.sleep(2)
                else:
                    moffGideon.attack_damage()
                    print("You were able to move out of the way. Moff Gideon struck a wall and lost 10 attack points.")
                    time.sleep(2)
            else:
                moffGideon.attack_damage()
                print("Your Beskar blocked the attack.")
                time.sleep(2)
        elif user_choice == '4':
            if mando.attack >= 90:
                print("Your Beskar was sticking out from behind the rock. You have been found by Moff Gideon.")
                time.sleep(2)
            else:
                mando.hide()
                moffGideon.attack_damage()
                print("You have successfully hidden in a cave. While resting you recovered 10 attack points.")
                time.sleep(2)
        elif user_choice == '5':
            print(f"Health: {mando.health}")  
            print(f"Attack: {mando.attack}")
            time.sleep(3)
        elif user_choice == '6':
            print(f"Health: {moffGideon.health}")
            print(f"Attack: {moffGideon.attack}")
            time.sleep(3)
        else:
            print("Please be sure to enter a number 1-5.")
            time.sleep(1)
        if mando.health == 0:
            print("Game Over! Moff Gideon has defeated you!")
            break
        elif moffGideon.health == 0:
            print("You have defeated Moff Gideon and now are the rightful owner of the DarkSaber")
            break

        
    return
def main():
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
        main()
    return
rules()  
main()