

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/25";

fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => console.log("Naam van Pokémon: " + data.name))
    .catch(() => console.log("Er ging iets mis"));
    