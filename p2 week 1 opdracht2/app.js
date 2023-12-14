// Opdracht 1
let winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];

// Opdracht 2
document.getElementById("length").innerText = `Aantal producten in winkelmand: ${winkelmandje.length}`;
document.getElementById("products").innerText = `Uw producten zijn: ${winkelmandje.join(', ')}`;

// Opdracht 3
document.getElementById("products").innerText += `\n${winkelmandje[3]} staat op de vierde plek in uw winkelmand`;

// Opdracht 4
winkelmandje[1] = "Bier";

// Opdracht 5
function addProduct() {
  let nieuwProduct = prompt("Voer een nieuw product in:");
  winkelmandje.push(nieuwProduct);
  document.getElementById("products").innerText = `Uw producten zijn: ${winkelmandje.join(', ')}`;
}

// Opdracht 6
if (winkelmandje.length > 1) {
  document.getElementById("products").innerText = `Uw producten zijn: ${winkelmandje.join(', ')}`;
} else {
  document.getElementById("products").innerText = "U heeft niet genoeg producten om te tonen";
}

// Opdracht 7
if (winkelmandje[4] === "Drop") {
  document.getElementById("products").innerText = `Uw producten zijn: ${winkelmandje.join(', ')}`;
} else {
  document.getElementById("products").innerText = "U heeft geen drop";
}

// Opdracht 8
winkelmandje = winkelmandje.join(' ').split(' ');

// Opdracht 9
let oudeWinkelmand = [...winkelmandje];
winkelmandje.splice(0, 2);

document.getElementById("products").innerText = `Oude winkelmand: ${oudeWinkelmand.join(', ')}\nNieuwe winkelmand: ${winkelmandje.join(', ')}`;

// Opdracht 10
winkelmandje.sort();
document.getElementById("products").innerText += `\nGesorteerde winkelmand: ${winkelmandje.join(', ')}`;
