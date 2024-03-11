//ODD numbers in Arrow  function
//var arr = [1,2,3,4,5]

var  addnum = (arr) =>
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