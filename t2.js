let productList=[
  ["курица", "вареники", "картофель"],
  ["кефир", "сметана"],
  ["грибы", "специи"]
]

for (let i=0; i<productList.length; i++) {
  for (let j=0; j<productList[j].length; j++) {
    console.log("Продукт: ", productList[i][j]);
  }
}

let cansList=[
  paper=["календарь", "блокнот"],
  pansel=["ручка", "маркер"],
  other=["кнопки", "корректор"]
]

for (let k=0; k<cansList.length; k++) {
  for (let x=0; x<cansList[k].length; x++) {
    console.log("Канцелярия: ", cansList[k][x]);
  }
}