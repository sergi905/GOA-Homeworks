# def number(lines):
#     result = []
    
#     for index in range(len(lines)):
#         word = str(index + 1) + ": " + lines[index]
#         result.append(word)
    
#     return result
# number("wa")



def capitalize(s):
    index = 0
    stri1 = ""
    stri2 = ""
    for i in s:
        if index % 2 == 0:
            stri1 = stri1 + i.upper() 
            stri2 = stri2 + i
            index = index + 1
        
        else:
            stri1 += i
            stri2 += i.upper()
            index += 1

return [stri1, stri2]