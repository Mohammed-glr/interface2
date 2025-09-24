let globalVar = 10;

const modifyVar = () => {
    let localVar = 5;
    let innerVar = 2;
    console.log(globalVar, localVar, innerVar);
};

modifyVar();
console.log(globalVar, localVar, innerVar);
// dit geeft een foutmelding omdat localVar en innerVar niet gedefinieerd zijn in deze scope.
// HET FOUTMELDING IS: Uncaught ReferenceError: localVar is not defined
// HET FOUTMELDING IS: Uncaught ReferenceError: innerVar is not defined