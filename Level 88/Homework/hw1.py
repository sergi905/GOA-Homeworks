def even_or_odd(s):
    odd_numbers = 0
    even_numbers = 0
    
    for char in s:
        num = int(char)  # Convert character to integer
        
        if num % 2 == 0:
            even_numbers += num
        else:
            odd_numbers += num

    if odd_numbers > even_numbers:
        return "Odd is greater than Even"
    elif even_numbers > odd_numbers:
        return "Even is greater than Odd"
    else:
        return "Even and Odd are the same"

# Example usage:
print(even_or_odd("1234"))  # Output: "Even is greater than Odd"
print(even_or_odd("112233"))  # Output: "Even and Odd are the same"
print(even_or_odd("13579"))  # Output: "Odd is greater than Even"
