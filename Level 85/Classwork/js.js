function charConcat(string) {
    let newarray = [];
    let length = string.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        newarray.push(string[i], string[length - (i + 1)], i + 1);
    }

    return newarray.join(""); 
}

console.log(charConcat("abcdef")); 
