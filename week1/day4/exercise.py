
list1 = []
tuple1 = ()
germanshepherd = 'germanshepherd'
bulldog = 'bulldog'
doberman = 'doberman'
husky = 'husky'
pug = 'pug'
lab = 'lab'
dogs_list = [germanshepherd, bulldog, doberman, husky, pug, lab]
joeWantsToPetTheDog = dogs_list[1]

petEveryDogUpToBullDog = dogs_list[:1]

labDog = dogs_list[-1]
labDog2 = dogs_list[5]

startingPoint = 5
# print(dogs_list[startingPoint])

count = 0
# while startingPoint <= 10:
#     print(dogs_list[count], count, startingPoint)
#     count += 1
#     startingPoint += 1

for dogs in dogs_list:
    print(dogs)

dogs_list.remove('dog')
print(dogs_list)
# for single item in list of items

