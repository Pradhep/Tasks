//For Asia in country or region
    const getdata = async ()=>{
    const data = await fetch("https://restcountries.com/v3.1/all");
    const countries =await data.json();
    const asiacount= countries.filter(
        (e) => e.region === "Asian" || e.continents.includes('Asia')
    );
    
    console.log(asiacount);
}
    

getdata();