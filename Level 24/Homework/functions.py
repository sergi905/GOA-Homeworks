def longest_string(strings):
    if not strings:
        return None
    longest = strings[0]  
    for string in strings:
        if len(string) > len(longest):
            longest = string
    return longest

string_list = ["apple", "banana", "cherry", "blueberry"]
result = longest_string(string_list)
print(result)
