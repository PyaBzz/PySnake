function log(message) {
    console.log(message);
}

function dasoo() {
    log('dasoo');
}

isDefined = function (variable) {
    return typeof variable !== 'undefined';
}

isUndefined = function (variable) {
    return typeof variable === 'undefined';
}

isFunction = function (variable) {
    return typeof variable === 'function';
}

ifFunctionRun = function (variable) {
    if (isFunction(variable))
        variable();
}

//###########################  Array  ############################################

Array.prototype.takeFirstOut = function () {
    let firstElement = this.shift();
    return firstElement;
}

Array.prototype.pickRandom = function (batchSize) {
    if (isUndefined(batchSize) || batchSize === 1) {
        let randomIndex = Math.floor(Math.random() * this.length);
        return this[randomIndex];
    }
    else {
        let clone = this.clone();
        let rand = new Random();
        for (let i = 1; i < clone.length; i++) {
            let ind = rand.getInt(0, i - 1);
            let temp = clone[ind];
            clone[ind] = clone[i];
            clone[i] = temp;
        }
        return clone.slice(0, batchSize);
    }
}

Array.prototype.clone = function () {
    return this.slice(0, this.length);
}

Array.prototype.discardElements = function () {
    while (this.hasAny)
        this.takeFirstOut();
}

Array.prototype.getMax = function () {
    let index = this.getIndexOfMax();
    return this[index];
}

Array.prototype.getIndexOfMax = function () {
    let index = 0;
    let max = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] > max) {
            index = i;
            max = this[i];
        }
    }
    return index;
}

Object.defineProperties(Array.prototype, {
    last: { get: function () { return this[this.length - 1] } },
    hasAny: { get: function () { return Boolean(this.length) } },
});

//###########################  Random  ############################################

Random = function () {
    //
}

Random.prototype.getInt = function (lower, upper) {  // Inclusive of boundaries
    return lower + Math.floor(Math.random() * (upper - lower + 1));
}
