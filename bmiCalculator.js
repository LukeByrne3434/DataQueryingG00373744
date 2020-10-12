class BMI {
    constructor(height, weight){//constructor for bmi parameters

        this.height = height;//assigns height the the field height
        this.weight = weight;

    }
    calculateBMI(){//calculation method
   
        let answer = this.weight/(this.height**2);// formula for bmi calculation
        return answer;//returning the result of the bmi calculation
    }
    
}
    let myBMI = new BMI(2, 90);//creating a bmi object with height and weight parameters

    let bmi = myBMI.calculateBMI(); //calling calculate bmi method 

    console.log(bmi);//console log to output result 