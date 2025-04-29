let list = [
  ["молоко", "творог", "кефир"],
  ["мясо", "хлеб"],
  ["специи", "овощи", "фрукты"]
]
for (let i = 0; i < list.length; i++) {
  for (let k = 0; k < list[i].length; k++) {
    console.log(list[i][k]);
  }
}

let arrObj = [
  {
    name: "Den",
    lastName: "Falkone",
    birthYear: 1980
  },
  {
    name: "John",
    lastName: "Carletone",
    birthYear: 1970
  },
  {
    name: "Ken",
    lastName: "Pit",
    birthYear: 1972
  },
  {
    name: "Alvis",
    lastName: "Presli",
    birthYear: 1983
  },
  {
    name: "Johny",
    lastName: "Dep",
    birthYear: 1981
  }
]
for (n = 0; n < arrObj.length; n++) {
  console.log(arrObj[n].lastName);
  if (arrObj[n].birthYear >= 1980) {
    console.log("Подходыщий по возрасту [младше 1980 гр]: ", arrObj[n].lastName, " = ", arrObj[n].birthYear);
  }
}