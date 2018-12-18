'use strict';
 var appliances = [];
 var appliance;

 class Appliance{
    constructor(name,power) {
        this.name = name;
        this.power = power;
        this.doesItWork = false;
    }
}

 class Room{
     constructor(appliances) {
         this.appliances = appliances;
     }

     findByName(name) {
        return this.appliances.filter(function(someAppliance) {
          return someAppliance.name.includes(name);
        });
    }

     switchAppliance(name) {
          appliance = this.appliances.find(function(someAppliance) {
             return someAppliance.name === name; 
         });
         var working = (appliance.doesItWork = true);
         return name + ' подключен';
    }

     power() {
         var poweredApplinces = this.appliances.filter(function(someAppliance) {
             return someAppliance.doesItWork;
         }); 
         var totalPower = 0;
         for (var appliance of poweredApplinces) {
             totalPower += appliance.power;
         }
         return totalPower;
     }
 }
 var newRoom = new Room([new Appliance('кофеварка', 200),
                         new Appliance('телевизор', 700),
                         new Appliance('утюг', 100)]);
                         
 console.log(newRoom.findByName('ко'));
 console.log(newRoom.switchAppliance('утюг'));
 console.log(newRoom.findByName('утюг'));
 console.log('потребляемая мощность: ' + newRoom.power()); 
