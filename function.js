let writeSpace = function () {
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  document.write("=-=-=-=-=-=-=-=-=-=-=-=-=-=", "<br>");
}

let funWrite = function () {
  console.log("Hello this is function");
  document.write("Hello this is function", "<br>");
}
funWrite();
writeSpace();

let welcomName = function (name) {
  console.log("Hi, " + name + ". This is fucntion");
  document.write("Hi, "+ name + ". This is function", "<br>");
}
welcomName("Den");
writeSpace();

function xxx() {
  console.log("it-camasutra");
  console.log("it-incubator");
  document.write("it-camasutra"+" "+"it-incubator", "<br>");
}
xxx();
writeSpace();

let lorem = function () {
  console.log("Lorem Lorem Lorem");
  document.write("Lorem Lorem Lorem", "<br>");
}
lorem();
writeSpace();

const info = function (age) {
  if (age >= 18) {
    console.log("Way is opened for you");
    document.write("Way is opened for you", "<br>")
  } else {
    console.log("Stop, way closed for you!");
    document.write("Stop, way closed for you!", "<br>");
  }
}
info(18);
writeSpace();

const carList = function (car) {
  if (car === "lada" || car === "geely") {
    console.log("This is domestic car");
    document.write("This is domestic car", "<br>");
  } else {
    console.log("This is IMPORTED car");
    document.write("This is IMPORTED car", "<br>");
  }
}
carList("lada");
writeSpace();

const nameLength = function (userName) {
  let res = 0;
  for (let i = 0; i < userName.length; i++) {
    res += 1;
  }
  console.log("Name length is =", res);
  document.write("Name length is =", res, "<br>");
}
nameLength("Nick");
writeSpace();

const littersName = function (userName) {
  for (let i = 0; i < userName.length; i++) {
    console.log("Litter of the name: ", userName[i].toUpperCase());
    document.write("Litter of the name: ", userName[i].toUpperCase(), "<br>");
  }
}
littersName("Nick");
writeSpace();

function printBrands() {
  console.log("it-camasutra");
  return 41;
}
const printResult=printBrands();
console.log(printBrands);