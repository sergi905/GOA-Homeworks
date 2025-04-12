filter-ის გამოყენებით ლისტიდან ამოიღეთ მხოლოდ ის ელემენტები, რომელიც უნაშთოდ იყოფა 12-ზე
 (edited)

listn = [1,2,3,4,5,6,12,24,36]
changed = list(filter(lambda x : x %12 == 0,listn))
print(changed)
