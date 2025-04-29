const tripleArray = [
  [13, [15, 17, 19], 21],
  [23, [25, 27]],
  [[29], 31, 33]
]
for (let i = 0; i < tripleArray.length; i++) {
  for (let j = 0; j < tripleArray[i].length; j++) {
    // if (tripleArray[i][j] < 30) {
    //   console.log("Данные меньше тридцати:", tripleArray[i][j]);
    // }
    for (let k = 0; k < tripleArray[i][j].length; k++) {
      console.log("Все данные тройного массива:", tripleArray[i][j][k]);
    }
  }
}