/**
 * Created by Vzhak on 30.05.2017.
 */
var elementary_calc=function(){

    var result=0,

    sum: function(first,second) {
        this.result= first+second
        console.log(this.result)
        return this
    },
    min: function(first,second) {
        this.result= first-second
        console.log(this.result)
        return this
    },
    mult: function(first,second) {
        this.result= first*second
        console.log(this.result)
        return this
    }

}


var advanced_calc = {
    square_root: function(first) {
        this.result= Math.sqrt(first)
        console.log(this.result)
        return this},
    abs_mod : function(first) {
        this.result= Math.abs(first)
        console.log(this.result)
        return this},
    cosinus : function(first) {
        this.result= Math.cos(first)
        console.log(this.result)
        return this},
    sinus : function(first) {
        this.result= Math.sin(first)
        console.log(this.result)
        return this}
}
advanced_calc.__proto__= elementary_calc;

elementary_calc.min(3,6).sum(5,7).min(10,8);
advanced_calc.sinus(1);
advanced_calc.sum(23,5);



var elementary_calc={

    result:0,
    sum: function(first,second) {
        this.result= first+second
        console.log(this.result)
        return this
    },
    min: function(first,second) {
        this.result= first-second
        console.log(this.result)
        return this
    },
    mult: function(first,second) {
        this.result= first*second
        console.log(this.result)
        return this
    }

}


var advanced_calc = {
    square_root: function(first) {
        this.result= Math.sqrt(first)
        console.log(this.result)
        return this},
    abs_mod : function(first) {
        this.result= Math.abs(first)
        console.log(this.result)
        return this},
    cosinus : function(first) {
        this.result= Math.cos(first)
        console.log(this.result)
        return this},
    sinus : function(first) {
        this.result= Math.sin(first)
        console.log(this.result)
        return this}
}
advanced_calc.__proto__= elementary_calc;
