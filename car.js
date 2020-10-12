class Vehicle{ 

    constructor(make, model, year){ //parent class constructor with flexible parameters 
        this.make = make;           //assigning parameters to variables
        this.model = model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}.`); //method to output 3 different pieces of information about the car using console.log
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    }

}

class Car extends Vehicle { //child class of vehicle with more specific carlike parameters

    constructor(make, model, year, doors){ //new constructor for child class which adds door parameter 
        super(make, model, year); //calling the super class assignments
        this.doors = doors; //assigning the new more specific parameter 
    }

    Information(){ //creating a new info method which adds "doors"
        super.Information();//calling the parent/super class method information
        console.log(`Doors: ${this.doors}`); //adding to the parents method call with the new parameter
    }
}

let myCar = new Car('VW,', 'Golf', 2010, 5); // creating an object using the combined super+child information method
myCar.Information(); //calling the information method to output above objects information