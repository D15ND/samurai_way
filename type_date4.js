let car={
  color: "red",
  engine: 4.2,
  maxspeed: 240,
  fuel: "B",
}

// console.log(car.color);
// console.log(car.engine);
// console.log(car.maxspeed);
// console.log(car.fuel);

// console.log(Object.keys(car)[3]);

for (let i=0; i<Object.keys(car).length; i++) {
  console.log(Object.keys(car)[i]);
}

if (car.color==="red") {
  console.log ("red");
} else {
  console.log("not red");
}

let speed=200;
let speedUnitsOfMeasure="km/h";
console.log(speed.toString().concat(), speedUnitsOfMeasure);

// creditcard
let expCardDate="05.2026";
let codeCVV=745;
let cardStatus="gold";
let cardOwner="Benjamin Franklin";
let cardOn=true;