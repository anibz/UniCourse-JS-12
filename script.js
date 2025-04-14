let userAge = Number(prompt("Enter your age"));
let movieType = prompt("Enter movie type (regular or 3D)").toLowerCase();
let timeOfDay = prompt("Enter time of day (matinee or evening)");

//Bonus
let discount = prompt("Do you have a discount ticket?");

let ticketPrice;

switch (true) {
  case userAge < 10:
    ticketPrice = 5;
    break;
  case userAge >= 10 && userAge < 65:
    ticketPrice = 15;
    break;
  case userAge >= 65:
    ticketPrice = 10;
    break;
}

if (movieType === "3d") {
  ticketPrice += 5;
}

if (timeOfDay === "evening") {
  ticketPrice += 5;
}

//Bonus
if (discount === "yes") {
  ticketPrice *= 0.75;
}

console.log(`ბილეთის ფასი თქვენთვის არის : ${ticketPrice} ლარი`);
