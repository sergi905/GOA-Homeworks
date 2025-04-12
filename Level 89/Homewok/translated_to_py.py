def slicer_machine():
    ting = "hellomane"
    prompter = int(input("Enter the starting number of index: "))
    
    if prompter > len(ting) - 1:
        return "Please try a number lower than " + len(ting)
    else:
        answer = ting[prompter:]
        return answer

print(slicer_machine())