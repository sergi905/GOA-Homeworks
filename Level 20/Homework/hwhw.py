def sum_of_even(list):
    even_numbers = []
    for i in list:
        if i % 2 == 0:
            even_numbers.append(i)
        return sum(even_numbers)  

print(sum_of_even([1,2,3,4,5,6,7,8,9,10]))     

# def num(sum_of_even):





def string_reverse(string):
    return string[::-1]

print(string_reverse("manqana"))    


def num_factorial(number):
    result = 1
    for i in range(1, number + 1):
        result = result * i
    return result

print(num_factorial(5))




def vowels_of_string(ting):
    vowels = ["a","e","i","o","u"]  
    

    return ting.count("")
    


print(vowels_of_string(["houdini"]))      


# 9.
prime_numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
def normal_number(number):
    if number in prime_numbers:
        print("true")
    else:
        print("False")    

normal_number(5)        