//Class Circle

class Circle {
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
        
       
    }
    
    getradcol(){
        let det = `Radius= ${this.radius} and Color=${this.color}`;
        return det;
    }
    getradius(){
        let det =`Radius from getradius method is ${this.radius}`;
        return det;
    }
    setradius(radius){
        this.radius=Number(radius);
        let det =`Radius assigned to setradius method is ${this.radius}`;
        return det;
    }
    getcolor(){
        let det =`Color from getcolor method is ${this.color}`;
        return det;
    }
    setColor(color){
        this.color=color;
        let det =`Color assignedto setradius method is ${this.color}`;
        return det;
    }
    
    getarea(){
        let pi=3.14;
        let area= pi * this.radius * this.radius;
        return area;
    }
    getcircumference(){
        let pi=3.14;
        let Circum= 2 * pi * this.radius;
        return Circum;
    }
}

let circle1=new Circle(1.0,"red");
console.log(circle1.getradcol());
console.log(circle1.getradius());
console.log(circle1.setradius(2.0));
console.log(circle1.getcolor());
console.log(circle1.setColor("Blue"));
console.log(circle1.getarea());
console.log(circle1.getcircumference());