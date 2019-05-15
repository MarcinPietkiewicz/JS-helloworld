
// constructor function
var Car = function(maxSpeed, driver){

    this.maxspeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed,time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver name is "+this.driver);
    };

}
// new objects
var myCar = new Car(70,"Ninja Man");
var myCar2 = new Car(60,"Martin");
var myCar3 = new Car(50,"Hilda");
var myCar4 = new Car(40,"Albert");

myCar.drive(30,5);
myCar2.logDriver();