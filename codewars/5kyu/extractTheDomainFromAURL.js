/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

function domainName(url){
    if (!url.startsWith('http')) url = 'http://' + url
    let a = new URL(url);
    let b = ''
    for (let i = 0 ; i < a.hostname.length; i++){
      if ((a.hostname[i] == '.')&&(a.hostname[i-1] !== 'w')){
        b = a.hostname.slice(0,i);
      };
    };
    return b.startsWith('www.') ? b.slice(4,b.length) : b.endsWith('.co') ? b.slice(0,b.length-3) : b
}