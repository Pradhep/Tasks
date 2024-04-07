
    //Print the total population of countries using reduce function
    
        const getdata = async ()=>{
    const data = await fetch("https://restcountries.com/v3.1/all");
    const countries =await data.json();  
     const population=countries.reduce((sum,e)=>{
        return sum+e.population;
    },0)
    console.log(population);}
    getdata();
    
    