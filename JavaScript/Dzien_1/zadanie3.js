const randomize = (param1, param2, callback) => {

    if (typeof callback !== 'function') {
        throw new TypeError('Error information');
    }

    // Pattern => Math.floor(Math.random() * (max - min + 1)) + min;

    const generatedNumber = Math.floor(Math.random() * (param2 - param1 + 1)) + param1;

    callback(generatedNumber);

}

randomize(5, 100, (num) => console.log(num));
