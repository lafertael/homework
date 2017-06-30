/**
 * Created by Vzhak on 06.06.2017.
 */

"use strict";

function Machine() {
    this._isEnabled = false;

    this.enableEngine = function () {
        this._isEnabled = true;
        return this._isEnabled;
    };
    this.disableEngine = function () {
        this._isEnabled = false;
        return this._isEnabled;
    }
}

function Car(power) {
    var CONSUMPTION = 10;
    var FUEL_TANK = 40;
    var self = this;
    var fuelAmount = 0;
    var oldEnableEngine;
    var isItGoing = false;
    var totalAmount = 0;
    var distance = 0;
    Machine.apply(self, arguments);

    this.setFuelAmount = function (amount) {
        if (amount <= 0 || amount === undefined) {
            throw new Error('Залейте положительное кол-во бензина!')
        }
        if (amount > FUEL_TANK) {
            throw new Error("Нельзя залить более" + FUEL_TANK + "л.")
        }
        totalAmount = fuelAmount + amount;
        if (totalAmount > FUEL_TANK) {
            throw new Error('Столько топлива не влезет! Мы не можем влить' + amount + " л. топлива.")
        }
        fuelAmount += amount;
        console.log("теперь в баке " + fuelAmount + " литров");
    };

    this.getFuelAmount = function () {
        return fuelAmount;
    };

    function getTimeOfRide() {
        return (totalAmount / CONSUMPTION) * 1000;
    }

    function stopRide() {
        console.log('Мы приехали через ' + getTimeOfRide() / 1000 + ' с.');
        isItGoing = false;
    }

    this.isInMotion = function () {
        if (isItGoing === false) {
            console.log("Машина стоит на месте");
        }
        else {
            console.log("Машина в движении");
        }
    };

    function useOfFuel() {
        if (fuelAmount <= 0.1) {
            clearInterval(self.intervalID);
            isItGoing = false;
        } else {
            if (fuelAmount < 10) {
                console.log("Осталось мало бензина!!");
                fuelAmount -= fuelAmount;
            } else {
                fuelAmount -= CONSUMPTION;
                distance++;
                console.log(fuelAmount)
            }
        }
    }

    this.ride = function () {
        isItGoing = true;
        this.intervalID = setInterval(useOfFuel, 1000);
        if (this._isEnabled) {
            if (fuelAmount <= 0.1) {
                throw new Error("Мы не можем ехать, в баке недостаточно бензина!");
            } else {
                this.timeoutID = setTimeout(stopRide, getTimeOfRide())
            }
        }
        else {
            console.log("Заведите двигатель!")
        }
    };

    this.totalDistance function() {
        distance += ((totalAmount - fuelAmount) / CONSUMPTION);
    }

    function passedDistance() {
        return ((totalAmount - fuelAmount) / CONSUMPTION);
    }

    function remainingPath() {
        return (fuelAmount / 10);
    }

    this.stopDriving = function () {
        if (isItGoing === true) {
            isItGoing = false;
            clearTimeout(this.timeoutID);
            clearInterval(this.intervalID);
            console.log("Авто остановлено. Вы проехали " + passedDistance() +
                " км. Вы можете проехать еще " + remainingPath() + " км. у вас осталось " + fuelAmount + " литров")
        }
        else {
            console.log("Авто и так остановлено");
        }
    };

    oldEnableEngine = this.enableEngine;
    this.enableEngine = function () {
        console.log("\n Двигатель заведен.");
        this._isEnabled = true;
    };

    console.log("Авто готово: мощность  " + power + 'л.с. \nВ баке: ' + fuelAmount + ' л.');
}


Car.prototype. = function () {
    this.crash = true;
    alert("Машина сломалась. Почините."), 6000
    );
}
;
//
//
// Car.prototype.isBroken = function() {
//     this.crash = true;
//     alert("Машина сломалась. Почините."), 6000);
// };


var car = new Car(100);
car.setFuelAmount(40);
car.enableEngine();
car.ride();

