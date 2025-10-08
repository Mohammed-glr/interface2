

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos/1"

export async function fetchData() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()
    
    return data
}
console.log("Data fetched from A.js")
fetchData().then(data => console.log(data));

