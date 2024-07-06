# Pop:

# 1)Remove and print the last element of a list of integers.

# 2)Remove and return the first element of a list of strings.

# 3)Pop the element at index 2 from a list of characters.

# 4)Remove and return the last element of a list 
 
# Count:

# 1)Count how many times the number 5 appears in a list of integers.

# 2)Count occurrences of the letter 'a' in a list of strings.

# 3)Count the number of True values in a list of boolean values.

# 4) Count occurrences of a sublist [3, 4] in a nested list. 

# 1)
list = [0, 1, 2]
print(list[2])
list.pop(2)
print(list)

print("_______________________________________")

# 2)
strings = ["string", "numa", "weqeqqe"]
strings.pop(0)
print(strings)
strings.insert(0, "string")
print(strings)

print("_______________________________________")
# 3)

characters = ["dwdwdw", "nick", "george"]
characters.pop(2)
print(characters)

print("_______________________________________")
# 4)

remove = ["first", "second", "third"]
print(remove)
remove.pop(2)
remove.append("third")
print(remove)

print("_______________________________________")
# 1)

five =[5,5,5,4,4,4]
print(five.count(5))

print("_______________________________________")
# 2)

a = ["apple", "ananas", "banana"]


sum1 =print(a[0].count("a"))
sum2 = print(a[1].count("a"))
sum3 = print(a[2].count("a"))

# sum1 + sum2 + sum3 == full
# print(full)
# 3)
print("_______________________________________")

booleans = [True, True, True, False, False]
print(booleans.count(True))



listttt = ["3,4"]
print(listttt.count("3,4"))




# 1)
integers = [0,1,2,3,4,5,6,7,8,9]
print(len(integers))

# 2)
weekdays =["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
print(len(weekdays))

weekdays.extend(integers)
print(weekdays)

dwdwdw= weekdays.copy()
print(dwdwdw)


numbawithweek = weekdays + integers
print(numbawithweek)
