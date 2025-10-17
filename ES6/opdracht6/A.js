

const ENDPOINT = "https://api.chucknorris.io/jokes/random";

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => console.log(data.value))
  .catch(() => console.log("Er ging iets mis"));