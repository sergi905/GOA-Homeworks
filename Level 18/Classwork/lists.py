nums = [0,3,6,2,8,9]
print(nums[:4])

# 2

numsss = [2,3,4,5,6]
print(numsss[2:])

# 3

second = [1,3,5,7,9]
print(second[::2])

# 4

subl = [2,3,4,5,23,1,4,5,7]
print(subl[2:8])

# 5

half = [2,1,2,3,1,2,55,66,44,66,88,22]
print(half[:7])

# 6

half = [2,1,2,3,1,2,55,66,44,66,88,22]
print(half[6:12])

# 7

firstlast = [2,3,4,1,2,8,9]
print(firstlast[1:-1])

# 8

step = [1,2,3,4,5,6,7,8,9]
print(step[1:-2: 2])


ohhh = "howsitgoing?"
print(ohhh[::-1])

straa = "dontdothatplease"
print(straa[:-3])

reverse = "reverse"
print(reverse[::-1])

listofthem = [1,2,3,4,5,6,7,8,9,10]
print(listofthem)


print("_____________________")

# newluwi = listofthem[1::2]
# print(newluwi)

# newluwi = [20,40,60,80,100]



listofthem[1::2] = [20,40,60,80,100]
print(listofthem)

listt = [1,2,3,4,5,6,7,8,9]
kenti = [1,3,5,7,9]
kenti = listt[::2]
del listt[::2]
print(listt)
print(kenti)



sia = [1,2,3,4,5]
sianew = sia[:]
print(sianew)

sianeww = sia.copy()
print(sianeww)


sia.extend(range(6,11))
print(sia)


# index (indexis adgili, teqsti)
sia.insert(2, "ohhh")
print(sia)



saxelebi1 = [1,2,3,4,5]
saxelebi2 = [6,7,8,9,0]
saxelebi1.extend(saxelebi2)
print(saxelebi1)



saxelebi3 = [2,3,1,5,2,7,3]
saxelebi3.insert(2,"XXXXXXXX")
print(saxelebi3)





