var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Martin";

myCar.drive = function(){console.log("now driving");};

myCar.drive();


var myCar2 = {
    maxSpeed:90, 
    driver: "Net Ninjas", 
    drive: function(speed,time){
        console.log(speed * time);
    },
    logDriver: function(){
       console.log("driver name is " + this.driver) 
    }
     
};

myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);

