//Remove duplicates

const arr = [1, 2, 2, 3, 3,4,5,5,6,7,8,6];

let uniqarr= function(arr){

var arr1=[...new Set(arr)];
    
    return arr1;
}

console.log(uniqarr(arr));

