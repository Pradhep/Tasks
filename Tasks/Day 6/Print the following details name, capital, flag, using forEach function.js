
//Print the following details name, capital, flag, using forEach function

    const getdata = async ()=>{
    const data = await fetch("https://restcountries.com/v3.1/all");
    const countries =await data.json();  
     countries.forEach((e)=>{
        console.log(e.name,e.capital,e.flag);
    })
    } 
    getdata();
    
