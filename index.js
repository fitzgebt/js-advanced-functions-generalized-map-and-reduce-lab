// Add your functions here
let test = [1,2,3,4]
let test2 = [1,2,-3,4]

function map(sourceArray, callback) {
    const newArray = []
    for (let num of sourceArray){
        newArray.push(callback(num))
    }
    return newArray
};

function reduce(sourceArray, callback, startingPoint) {
    let total
    if (startingPoint) {
        total = startingPoint
        for (let i=0; i < sourceArray.length; i++) {
            total = callback(sourceArray[i], total)
        }
            // for (let num of sourceArray) {
                //     total = callback(num, total)
                // }
        return total
    } else {
        total = sourceArray[0]
        for (let i=1; i < sourceArray.length; i++) {
        total = callback(sourceArray[i], total)
        }
    
        // for (let num of sourceArray) {
        //     total = callback(num, total)
        // }
    return total
    }
}; 

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let num of sourceArray) {
        total = total + num
    }
    return total
};

function reduceToAllTrue(sourceArray) {
    let status = true
    for (let num of sourceArray) {
        if (num === false) {
            status = false;
        }
    }
    return status
};

function reduceToAnyTrue(sourceArray) {
    let status = false
    for (let num of sourceArray) {
        // debugger
        if (num === true) {
            status = true;
        }
    }
    return status
};

