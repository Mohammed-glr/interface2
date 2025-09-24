let globalVar = 10;

const myObject = {
    property: 5,
    regularFunction: function() {
        return this.property && globalVar;
    },
    arrowFunction: () => {
        return this.property && globalVar;
    }
}

console.log(myObject.regularFunction()); 
console.log(myObject.arrowFunction());