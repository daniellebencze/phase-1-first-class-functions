 function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction () {
        console.log ("console something")
}
}

function returnsAnAnonymousFunction() {
    return function () {
        
    }
}