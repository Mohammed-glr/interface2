//   Gebruik de PokéAPI met dit adres: https://pokeapi.co/api/v2/pokemon/25
// • (25 = Pikachu)
// • Gebruik fetch() om de data op te halen
// • Zet in de console: "Naam van Pokémon: Pikachu"
// • Voeg ook een .catch() toe

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/25";

fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => console.log("Naam van Pokémon: " + data.name))
    .catch(() => console.log("Er ging iets mis"));
    