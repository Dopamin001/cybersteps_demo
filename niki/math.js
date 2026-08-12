let radius = 5;
let flaeche = Math.PI * radius ** 2;

console.log(flaeche);

let zahl = 17;

if (zahl % 2 === 0) {
    console.log("Die Zahl ist gerade");
} else {
    console.log("Die Zahl ist ungerade");
}

let note = 2;

if (typeof note !== "number") {
    console.log("Wert ist keine Zahl");
} else if (note >= 1 && note <= 2) {
    console.log("gut");
} else if (note >= 3 && note <= 4) {
    console.log("bestanden");
} else if (note >= 5 && note <= 6) {
    console.log("schlecht");
} else {
    console.log("ungültige Note");
}