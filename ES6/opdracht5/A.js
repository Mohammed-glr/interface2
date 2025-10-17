

function rekenUit(num1, num2, callback) {
    const sum = num1 + num2;
    return callback(sum);
}

const verdubbel = (result) => result * 2;

const resultaat = rekenUit(3, 4, verdubbel);
console.log(resultaat);


function wachtEnVoerUit(tijd, callback) {
    setTimeout(callback, tijd);
}

wachtEnVoerUit(2000, () => {
    console.log("Klaar met wachten!");
});
