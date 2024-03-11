///Array Median Anonymous

const median = function(a, b)  {
    //Sort the array
    let c = [...a, ...b].sort((a, b) => a - b);
    
    //Get the floor value
    const half = c.length / 2 | 0;
    
    //If odd then return middle element
    if (c.length % 2) return c[half];
    
    //If even then return the average of two mid elements
    return (c[half] + c[half - 1]) / 2;
}

const arr1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45, 47];
console.log(median(arr1, arr2));
