
//ODD numbers in Anonymous function

var  addnum = function(arr) 
{

    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            console.log(arr[i]);
        }
    }
}
addnum([5,4,3,2,1]);
