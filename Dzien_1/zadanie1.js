Array.prototype.customReduce = function(callback, initialValue) {

    if (typeof callback !== 'function') {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    let accumulator = initialValue;
    let index = 0;

    if (initialValue === undefined) {
        accumulator = this[0];
        index = 1;
    }

    for (; index < this.length; index++) {
        accumulator = callback(accumulator, this[index], index, this);
    }

    return accumulator;

}

const numbers = [4, 12, 23, 76, 4];

console.log(numbers.customReduce((acc, next) => acc + next, 0));
console.log(numbers.customReduce((acc, next) => acc * next));
