/**
 * Created by Vzhak on 03.06.2017.
 */
var Elementary_calc = function () {

    var res = 0;
    this.sum = function (first, second) {
        res = first + second;
        console.log(res);
        return this
    };
    this.min = function (first, second) {
        res = first - second;
        console.log(res);
        return this
    };
    this.mult = function (first) {
        var currentMult = first;
        function f(second) {
            currentMult *= second;
            return f;
        }
        f.toString = function() {
            return currentMult;
        };
        return f;
    };
    this.result = function () {
        console.log("Результат последних вычислений" + res)
    }

};

var Advanced_calc = function () {
    Elementary_calc.call(this);
    this.square_root = function (first) {
        res = Math.sqrt(first);
        console.log(res);
        return this;
    };
    this.abs_mod = function (first) {
        res = Math.abs(first);
        console.log(res);
        return this;
    };
    this.cosinus = function (first) {
        res = Math.cos(first);
        console.log(res);
        return this;
    };
    this.sinus = function (first) {
        res = Math.sin(first);
        console.log(res);
        return this;
    }
};
