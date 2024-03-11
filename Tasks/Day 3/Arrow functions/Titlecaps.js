// Convert all the strings to title caps in a string array --Titlecaps(Arrow)
//function  titlecaps(str) {
let  titlecaps = (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        //console.log(str[i].charAt(0),str[i].slice(1));
    }
    return str.join(' ');
}
console.log(titlecaps("hello world"));
