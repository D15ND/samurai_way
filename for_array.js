let grades=[5,4,5,3,5,2];
let sum=0;
for (let i=0; i<grades.length; i++) {
  console.log("("+[i]+")"+" По одному числу в строку: "+grades[i]);
  sum+=grades[i];
}
console.log("Итоговая сумма чисел =", sum);

console.log("-------------------------------------");

let books=[
  "Война и Мир",
  "Богатый папа бедный папа",
  "Бытие"
]

for (let j=0; j<books.length; j++) {
  console.log(books[j]);
}

console.log("-------------------------------------");

let personal=[
  person1={
    name: "Evgen",
    age: 20
  },
  person2={
    name: "John",
    age: 25
  }
];

for (let k=0; k<personal.length; k++) {
  // console.log(personal[k]);
  // console.log("Данные в одну строку: "+personal[k].name, personal[k].age);
  console.log(personal[k].name);
}

console.log("-------------------------------------");

let shopingLists=[
  ["молоко", "хлеб", "яйца"],
  ["сок", "мороженное"],
  ["корм для кота", "шампунь"]
]

for (let g=0; g<shopingLists.length; g++) {
  console.log("Список № ", g+1);
  for (let x=0; x<shopingLists[g].length; x++) {
    console.log(shopingLists[g][x]);
  }
  console.log("-=-=-=-=-=-=-");
}