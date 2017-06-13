/**
 * Created by Vzhak on 06.06.2017.
 */

"use strict";

function Machine() {
    this._enable = false;

    this.enableEngine = function () {
        this._enable = true;
        return this._enable;
    };
    this.disableEngine = function () {
        this._enable = false;
        return this._enable;
    }
}

function Car(power) {

    var CONSUMPTION = 10;
    var FUEL_TANK = 40;
    var self = this;
    var fuelAmount = 0;
    var oldEnableEngine;
    var isRunning1 = false;
    var totalAmount = 0;
    Machine.apply(self, arguments);

    this.setFuelAmount = function (amount) {

        if (amount <= 0) {
            throw new Error('Залейте положительное кол-во бензина!')
        }
        if (amount > FUEL_TANK) {
            throw new Error("Нельзя залить более 40 л.")
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
        isRunning1 = false;
    }


    this.isRunning = function () {

        if (isRunning1 === false) {
            console.log("Машина стоит на месте");
        }
        else {
            console.log("Машина в движении");
        }
    };

    function interval() {

        if (fuelAmount <= 0.1) {
            clearInterval(self.intervalID);
            console.log("Бензин закончился");
        } else {
            if(fuelAmount<10){
                console.log("Осталось мало бензина!!");
                fuelAmount -= fuelAmount;
            }else{
            fuelAmount -= CONSUMPTION;
            console.log(fuelAmount)
            }
        }
    }

    this.ride = function () {

        isRunning1 = true;
        this.intervalID = setInterval(interval, 1000);

        if (this._enable) {
            if (fuelAmount <= 0.1) {
                throw new Error ("Мы не можем ехать, в баке недостаточно бензина!");
            } else {
                this.timeoutID = setTimeout(stopRide, getTimeOfRide())
            }
        }
        else {
            console.log("Заведите двигатель!")
        }

    };

    this.stopDriving = function () {

        if (isRunning1 === true) {
            isRunning1 = false;
            clearTimeout(this.timeoutID);
            clearInterval(this.intervalID);
            console.log("Авто остановлено. Вы проехали " + ((totalAmount - fuelAmount) / 10) +
                " км. Вы можете проехать еще " + getTimeOfRide() / 1000 + " км. у вас осталось " + fuelAmount + " литров")
        }
        else {
            console.log("Авто и так остановлено");
        }
    };
    
    oldEnableEngine = this.enableEngine;
    this.enableEngine = function () {
        console.log("\n Двигатель заведен.");
        this._enable = true;
    };

    console.log("Авто готово: мощность  " + power + 'л.с. \nВ баке: ' + fuelAmount + ' л.');
}

var car = new Car(100);
car.setFuelAmount(40);
car.enableEngine();
car.ride();
car.stopDriving();
