
class Person {
  constructor(firstName, lastName, age, city, state ,country) {
  this.fname=firstName;
  this.lname=lastName;
  this.age=age;
  this.city=city;
  this.state=state;
  this.country=country;

//this.printdetails();
  }
  printdetails() {
    let det=`Hi, I am ${this.fname} ${this.lname} , ${this.age}  years old and currently living in ${this.city},${this.state},${this.country}`
    return det;
  }
 
}

const person1 = new Person('Bruce', 'Wayne', 28, 'Chennai', 'Tamilnadu','India')
const person2 = new Person('Tony', 'Stark', 28, 'Chennai', 'Tamilnadu','India')

console.log(person1.printdetails())
console.log(person2.printdetails())



