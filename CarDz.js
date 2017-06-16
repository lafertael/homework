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
    this._beep = 0;
    this._beepStatus = true;
    var carRepairStatus = false;

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
        checkDistance();
        
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
        checkCarCondition();
        
        if (this._isEnabled) {
            checkFuel();
            isItGoing = true;
            this.intervalID = setInterval(useOfFuel, 1000);
            this.timeoutID = setTimeout(stopRide, getTimeOfRide());
        }
        else {
            console.log("Заведите двигатель!")
        }
    };

    function checkCarCondition() {
        
        if (carRepairStatus === true) {
            throw new Error("Вы должны починить машину!");
        }
    }

    function checkFuel() {
        
        if (fuelAmount <= 0.1) {
            throw new Error("Мы не можем ехать, в баке недостаточно бензина!");
        }
    }

    function checkDistance() {
        
        if (distance % 5 === 0 && distance > 1) {
            carRepairStatus = true;
            console.log("Машина Сломана! Почините ее!");
            self.stopDriving();
        }
    }

    this.repairCar = function () {
        fuelAmount = 0;
        
        if (carRepairStatus === false) {
            console.log("Ремонт не требуется. Авто в порядке.")
        } else {
            carRepairStatus = false;
            console.log("Ремонт авто окончен.")
        }
    };

    this.totalDistance = function () {
        return distance;
    };

    function oncePassedDistance() {
        return ((totalAmount - fuelAmount) / CONSUMPTION);
    }

    function remainingPath() {
        return (fuelAmount / 10);
    }

    this.stopDriving = function () {
        
        if (isItGoing === true) {
            isItGoing = false;
            this._isEnabled = false;
            clearInterval(this.intervalID);
            clearTimeout(this.timeoutID);
            console.log("Авто остановлено. Двигатель заглушен. Вы проехали " + oncePassedDistance() +
                " км. Вы можете проехать еще " + remainingPath() + " км. у вас осталось " + fuelAmount + " литров")
        }
        else {
            console.log("Авто и так остановлено");
        }
    };
    console.log("Авто готово: мощность  " + power + 'л.с. \nВ баке: ' + fuelAmount + ' л.');
}


Car.prototype.makeBeep = function () {

    if (this._beep === 5) {
        console.log("Клаксон сломан, замените его.");
        this._beepStatus = false;
    }
    else {
        console.log("Beep, beep!!!");
        this._beep++;
    }
};

Car.prototype.repareBeep = function () {
    if (this._beepStatus === true) {
        console.log("Ремонт не требуется. Клаксон в порядке.")
    } else {
        this._beepStatus = true;
        this._beep = 0;
        console.log("Ремонт окончен.")
    }
};

Car.prototype.checkEngine = function () {
    if (this._isEnabled === true) {
        console.log("двигатель заведен");
    }
    else {
        console.log("двигатель заглушен");
    }
};

var car = new Car(100);
car.setFuelAmount(40);
car.enableEngine();
car.ride();

