
//Palindrome in Arrow function
   
let pal= (str) => {
    let rev = "";
    //console.log(str);
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
        //console.log(rev);
    }
    if (rev == str) {
        return str;
    } 
    
}
 
let findpal = (arr) =>
{
    let palarr=[]
    for(i=0;i<arr.length;i++){
        //console.log(arr[i]);
        var palval=pal(arr[i]);
        //console.log(palval)
        if(palval != undefined){
        palarr.push(palval);
        }
    }
    return palarr;
}

console.log(findpal(['madam','malayalam','ram']))

