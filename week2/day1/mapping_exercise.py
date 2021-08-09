
ramit = {
  'name': 'Ramit',
  'email': 'ramit@gmail.com',
  'interests': ['movies', 'tennis'],
  'friends': [
    {
      'name': 'Jasmine',
      'email': 'jasmine@yahoo.com',
      'interests': ['photography', 'tennis']
    },
    {
      'name': 'Jan',
      'email': 'jan@hotmail.com',
      'interests': ['movies', 'tv']
    }
  ]
}
# print(ramit)
# print(ramit["email"])
# print(ramit["interests"][0])
# print(ramit["friends"][1]["email"])
# def countfriends(dictionary):
#     friends_count = 0
#     for key, value in dictionary.items():
#         if 'friends' in dictionary:
#             friends_count += 1
#             dictionary['friends count'] = friends_count
#             print(dictionary)
#     return

# print(countfriends(ramit))

def countfriends2(key, value):
    if ramit.get(key) == None:
        ramit[key] = value

countfriends2('friends_count', 2)
print(ramit)


#     friends_count = 0
#     new_dictionary = {}
#     for key, value in dictionary.items():
#         if key == "friends":
#             friends_count += len(key)
#             print(friends_count)
#         else: 
#             print("this did not worl")
#     return

# print(countfriends(ramit)