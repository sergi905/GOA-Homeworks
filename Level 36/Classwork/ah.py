# def find_short(s):
#     words = s.split(" ")
#     lengthes = []
    
#     for word in words:
#         lengthes.append(len(word))
    
#     return min(lengthes)


def sum_two_smallest_numbers(numbers):
        numbers.sort()

        return numbers[1] + numbers[2]


[1,2,3,4,5]
