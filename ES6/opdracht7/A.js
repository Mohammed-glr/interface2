

const ENDPOINT = "https://api.chucknorris.io/jokes/random";

async function haalGrapOp() {
    try {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        console.log(data.value);
    } catch {
        console.log("Er ging iets mis");
    }
}

haalGrapOp();
