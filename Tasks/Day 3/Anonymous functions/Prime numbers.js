
//Prime numbers
   
let prime = function(num)
{
   
  for (let i = 2; i <= Math.sqrt(num); i++) 
  {
    if (num % i === 0) 
    {
      return false;
    }
  }
  return num > 1;
}

let findprime = function(arr)
{
    let primearr=[]
    for(i=0;i<arr.length;i++){
        
        var primeval=prime(arr[i]);
        if(primeval != false){
         primearr.push(arr[i]);
         }
       
    }
    return primearr;
}

console.log(findprime([8,5,3,6,9,2,11,13,17,19,21,23]))
