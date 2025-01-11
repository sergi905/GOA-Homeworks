function domain_name(url_full){
    let parts = url_full.split(".");
    let parts_zero = parts[0];
    let parts_zero_split = parts_zero.split("https://");
    
    if (url_full.startsWith("www.")){

        console.log("domain name = " + parts[1]);
    }
    else if (url_full.startsWith("https://")){
        console.log("domain name = " + parts_zero_split[1]);
    }
    else {
        url_full = url_full.split(".");
        console.log("domain name = " + url_full[0]);

    }
}

console.log(domain_name("www.roblox.com"));