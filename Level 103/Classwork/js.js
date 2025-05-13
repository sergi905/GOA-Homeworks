function f(s){
    if (s[0] === s[0].ToUppercase()){
        return s.split("").reverse().join("");
    }
    if (s[0] === s[0].ToLowercase()){
        return s;
    }
    if (!s){
        return "";
    }
}
