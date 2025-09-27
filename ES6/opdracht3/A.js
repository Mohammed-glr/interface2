const naam = "mo"
const klas = "D2D"
const opleiding = "Software Developer"

const vaandag = new Date().toLocaleDateString("nl-NL");

const bericht = `Welkom,${naam}! Je ziet in klas: ${klas} op de opleiding: ${opleiding}, vaandag: ${vaandag}`

console.log(bericht)