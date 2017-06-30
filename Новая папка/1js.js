/**
 * Created by Vzhak on 27.05.2017.
 */

'use strict';

var obj = {
    city: "Dnepr", zip: undefined
}
console.log(obj.zip);



var animal = {
    name:'Cat'
    number_of_legs:4
}

animal.name = "Dog";
delete animal.name;




var steps={
    counter:0,
    up: function () {
        this.counter++
        console.log("Шаг вверх")
        return this
    },
    down: function () {
        console.log("Шаг вниз")
        this.counter--
        return this
    },
    result: function () {
        console.log(this.counter)
        return this
    }
}



var animal = {
    eats: true
}

var cat = {
    eats: true
}

cat.__proto__=animal;

cat.eats;
console.log(cat.hasOwnProperty('eats'));



