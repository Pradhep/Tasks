//For Population less than 2 Lakhs


    const getdata = async ()=>{
    const data = await fetch("https://restcountries.com/v3.1/all");
    const countries =await data.json();
   
    const Popcount= countries.filter(
        (e) => e.population < 200000
    );
    
    console.log(Popcount);
}
    

getdata();

