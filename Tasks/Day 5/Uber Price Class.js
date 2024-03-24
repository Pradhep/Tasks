//Uber Price Class

class Uber {
  constructor(Fromloc, Toloc,distance, Username) {
  this.Fromloc=Fromloc;
  this.Toloc=Toloc;
  this.distance=distance;
  this.Username=Username;



  }
  Pricedet(){
      this.price=10;
      this.totalprice= this.price * this.distance;
  }
  printdetails() {
      this.Pricedet();
    let det=`Welcome ${this.Username} , the cost of the Uber ride from ${this.Fromloc} to ${this.Toloc} is ${this.totalprice} for ${this.distance}KM`
    return det;
  }
 
}

const Uber1 = new Uber('Chennai', 'Bangalore', 20, 'Tony')
const Uber2 = new Uber('Bangalore', 'Chennai', 20, 'Bruce')

console.log(Uber1.printdetails())
console.log(Uber2.printdetails())



