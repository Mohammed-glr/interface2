

const ENDPOINT = "https://jsonplaceholder.typicode.com/users/{id}";

let userId = prompt("Voer een gebruikers-ID in (1-10):");


fetch(ENDPOINT.replace("{id}", userId))
    .then((response) => {
        switch (response.status) {
            case 200:
                return response.json();
            case 404:
                throw new Error("Gebruiker niet gevonden");
            default:
                throw new Error("Er ging iets mis");
        }

    })
    .then((data) => {
        console.log("Naam van gebruiker: " + data.name);
        console.log("E-mail van gebruiker: " + data.email);
        console.log("Telefoonnummer van gebruiker: " + data.phone);
        console.log("Website van gebruiker: " + data.website);
        
    })
    .catch((error) => {
        console.error("Fout opgetreden:", error);
    });
