//Country that uses US dollars as currency


    const getdata = async ()=>{
    const data = await fetch("https://restcountries.com/v3.1/all");
    const countries =await data.json();
       
     const Curcount= countries.filter(
        //(e) => e.currencies === e.currencies.includes('Unites States Dollar')
        (e) => e?.currencies?.USD
    );
    console.log(Curcount);
}
    

getdata();


