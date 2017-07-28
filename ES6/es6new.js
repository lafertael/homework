/**
 * Created by Vzhak on 20.07.2017.
 */

// 2) Написать итератор, который вернет последовательно от from до to с шагом step. Например:
// let my_iterator = {
//     from: 0,
//     to: 10,
//     step: 5
// }
// for (let val of my_iterator) {
//     console.log(num); // 0, 5, 10
// }
//

'use strict';

let my_iterator = {
    from: 0,
    to: 20,
    step: 3
};

// сделаем объект my_iterator итерируемым
my_iterator[Symbol.iterator] = function () {

    let current = this.from;
    let last = this.to;
    let step = this.step;
    //первое значение без итерирования
    console.log(current);
    // метод вернет объект с методом next()
    return {
        next() {
            if (current < last && last - current >= step) {
                return {
                    done: false,
                    value: current += step
                };
            }
            else {
                return {
                    done: true
                };
            }
        }

    }
};

for (let val of my_iterator) {
    console.log(val);
}


/**
 * Created by Vzhak on 03.06.2017.
 */

class Elementary_calc {
    constructor(first, second) {
        let res = 0;
        this.sum = (first, second) => {
            res = first + second;
            console.log(res);
            return this
        };

        this.min = (first, second) => {
            res = first - second;
            console.log(res);
            return this;
        };

        this.mult = (first) => {
            let currentMult = first;

            function f(second) {
                currentMult *= second;
                return f;
            }

            f.toString = () => {
                return currentMult;
            };
            return f;
        };
        this.result = function () {
            console.log(`Результат последних вычислений"${res}`)
        }
    }
}

class Advanced_calc extends Elementary_calc {
    constructor(first, second) {
        super(first, second);
        super(res);
        this.square_root = (first) => {
            let res = Math.sqrt(first);
            console.log(res);
            return this;
        };
        this.abs_mod = (first) => {
            let res = Math.abs(first);
            console.log(res);
            return this;
        };
        this.cosinus = (first) => {
            let  res = Math.cos(first);
            console.log(res);
            return this;
        };
        this.sinus = (first) => {
            let res = Math.sin(first);
            console.log(res);
            return this;
        }
    }
}
