const personalList=[
  {
    name: "Jorh",
    lastName: "Cluni",
    birthYear: 1973
  },
  {
    name: "Elon",
    lastName: "Musk",
    birthYear: 1971
  },
  {
    name: "Curt",
    lastName: "Cobain",
    birthYear: 1975
  },
  {
    name: "Ernesto",
    lastName: "Chegevara",
    birthYear: 1928
  }
]
for (let i=0; i<personalList.length; i++) {
  console.log("Фамилии людей:", personalList[i].lastName);
}

let list={
  car: "audi",
  color: "white",
  fuel: "gasoline"
}

console.log(Object.keys(list));