/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.


*/

function removeUrlAnchor(url){
    let a = url.indexOf('#');
    return a == -1 ? url : url.slice(0,a);
}