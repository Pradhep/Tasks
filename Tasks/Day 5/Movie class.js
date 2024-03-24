
class Movie {
  constructor(Title, Studio,Rating) {
      this.PGMoviearr=[];
  this.Title=Title;
  this.Studio=Studio;
  if(this.Rating==''){
      this.Rating='PG';
  }
  else{
      this.Rating=Rating;
  }
  
//getPG(Title);
  }
  

 
 getPG(arr){
     let PGmovies= arr.filter((e)=>{
         return e.Rating=="PG";
         
     })
     return PGmovies;
     
 }
}

const Movie1 = new Movie('Casino Royale', 'Eon Productions', 'PG')
let Movieslist = [{Title:"Predator",Studio:"Disney",Rating:"R"},
{Title:"Venom",Studio:"Sony",Rating:"PG13"},
{Title:"Nemo",Studio:"Pixar",Rating:"PG"}]

let PGmovies= Movie1.getPG(Movieslist);


console.log(PGmovies);


