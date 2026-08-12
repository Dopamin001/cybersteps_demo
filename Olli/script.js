let name = "Oliver";
let zahl = 42;
let text = "Hallo Welt";
let boolean = true;
let array = [1, 2, 3, 4, 5];

console.log(typeof name);
console.log(typeof zahl);
console.log(typeof text);
console.log(typeof boolean);
console.log(typeof array);

let radius = 5;
let flaeche = Math.PI * radius ** 2;

console.log(flaeche);

let zahl = 17;

if (zahl % 2 === 0) {
    console.log("17 ist gerade");
} else {
    console.log("17 ist ungerade");
}

let note = 2;

if (note === 1 || note === 2) {
    console.log("gut");
} else if (note === 3 || note === 4) {
    console.log("bestanden");
} else if (note === 5 || note === 6) {
    console.log("schlecht");
} else {
    console.log("Ungültige Note");
}