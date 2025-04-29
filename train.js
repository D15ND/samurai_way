let personal=[
  {
    name: "ivan",
    lastName: "Puplikov",
    birthYear: 1981
  },
  {
    name: "Tanya",
    lastName: "Filkova",
    birthYear: 1992
  },
  {
    name: "Den",
    lastName: "Wofter",
    birthYear: 1973
  },
  {
    name: "Nikolas",
    lastName: "Keij",
    birthYear: 1970
  }
]

for (let i=0; i<personal.length; i++) {
  // let limitAge=1980;
  if (personal[i].birthYear>1980) {
    console.log(personal[i].lastName);
  }
}

let mass=[
  ["bmw", "audi", "lada"],
  ["gasoline", "diesel"],
  ["manual", "automatic"]
]

for (let k=0; k<mass.length; k++) {
  for (let x=0; x<mass[k].length; x++) {
    console.log(mass[k][x]);
  }
}