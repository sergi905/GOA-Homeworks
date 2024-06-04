num = 5

print("----------- AND -----------")

print(num >= 1 and num <= 10) # True
# 5 ertze meti an tolicaa 5 da atze naklebi an tolic

print(num >= 1 and num <= 4) # False
# xuti ertze meti an tolia, tumca otxze naklebi an toli araa

print(num > 5 and num <= 10) # False
# xuti 5ze meti araa da aq cherdeba scripti da false aris

print(num > 5 and num > 10) # False
# xuti 5ze meti araa da aq cherdeba scripti da false aris

print("----------- OR -----------")

print(num >= 1 or num <= 10) # True
# xuti ertze meti an tolicaa da atze naklebi da tolic anu aris true

print(num >= 1 or num <= 4) # True
# xuti aris ertze meti an toli, tumca otxze naklebi an toli araa, radgan pirobashi "or" weria, ertis dakmayofilebitac mivigebt "true"s

print(num > 5 or num <= 10) # True
# xuti xutze meti araa, tumca aris atze naklebi an toli,radgan pirobashi "or" weria, ertis dakmayofilebitac mivigebt "true"s

print(num > 5 or num > 10) # False
# xuti xutze meti araa, tumca arc atzec metia, radgan arc pirveli da arc meore piroba dakmayofilda, miviget pasuxi "false"