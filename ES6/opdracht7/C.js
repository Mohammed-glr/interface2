
const ENDPOINT = "https://jsonplaceholder.typicode.com/users/{id}";

let userId = prompt("Voer een gebruikers-ID in (1-10):");

async function controleerGebruiker() {
    try {
        const response = await fetch(ENDPOINT.replace("{id}", userId));
        switch (response.status) {
            case 200:
                const data = await response.json();
                console.log("Gebruiker gevonden: " + data.name);
                break;
            case 404:
                console.log("Gebruiker niet gevonden");
                break;
            default:
                throw new Error("Er ging iets mis");
        }
    } catch (error) {
        console.log("Fout opgetreden: " + error.message);
    }
}

controleerGebruiker();
