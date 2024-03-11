//Sum of arrary numbers(Arrow)
let sumarr=(arr) =>{
    let sum=0;
     for(i=0;i<arr.length;i++)
    {
       sum=sum+Number(arr[i]);
       //console .log(Number(arr[i]));
    }
    return sum
}
var arr=[8,2,6,4,5]
console.log(sumarr(arr));

