import readline from "node:readline/promises";

// Aufgabe 1: Fläche eines Kreises
const radius = 5;
const flaeche = Math.PI * radius ** 2;

console.log(flaeche);
console.log(flaeche.toFixed(2));

// Aufgabe 2: Ist die eingegebene Zahl gerade?
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const eingabe = await rl.question("Gib eine Zahl ein: ");
rl.close();

const zahl = Number(eingabe);

if (Number.isNaN(zahl)) {
  console.log("Das war keine Zahl.");
} else if (zahl % 2 === 0) {
  console.log(zahl + " ist gerade");
} else {
  console.log(zahl + " ist ungerade");
}
