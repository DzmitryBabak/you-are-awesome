// DO WHATEVER YOU WANT HERE


const createEnumerableProperty = () => {
};
const createNotEnumerableProperty = (data) => {
    return Symbol(data);
};
const createProtoMagicObject = () => {
    const mFunction = function () {
    };
    mFunction.__proto__ = new Function();
    mFunction.prototype = mFunction.__proto__;
    return mFunction;
};
let count = 0;
const incrementor = () => {
    incrementor.valueOf = () => {
        return count;
    };
    count++;
    return incrementor;
};
let asyncIncrementorCounter = 0;
const asyncIncrementor = () => {
    return Promise.resolve(++asyncIncrementorCounter)
};
let incrementer = 0;
const createIncrementer = () => {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next: function () {
            return {
                done: false,
                value: ++incrementer
            }
        }
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {

};
const getDeepPropertiesCount = (arrData, count = 0) => {
    if (typeof arrData === 'object') {
        for (let key in arrData) {
            count += 1;
            count += getDeepPropertiesCount(arrData[key]);
        }
        return count;
    }
};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {
};
const sortByProto = (arrData) => {
    arrData.sort((a, b) => {
        return a.__proto__ - b.__proto__;
    });
    return arrData;

};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;