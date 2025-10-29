

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/{id}";

let id = Math.floor(Math.random() * 151) + 1;

async function haalPokemonOp() {
    try {
        const response = await fetch(ENDPOINT.replace("{id}", id));
        switch (response.status) {
            case 200:
                const data = await response.json();
                console.log("Naam van Pokémon: " + data.name);
                console.log(data);
                break;
            case 404:
                throw new Error("Pokémon niet gevonden");
            default:
                throw new Error("Er ging iets mis");
        }
    } catch (error) {
        console.log(error.message);
    }
}

haalPokemonOp();
