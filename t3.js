const arrToArr = [
  [45, 32, 14],
  [8, 5, 13],
  [10, 4, 6, 80]
]

for (let i=0; i<arrToArr.length; i++) {
  for (let j=0; j<arrToArr[i].length; j++) {
    if (arrToArr[i][j]>20) {
      console.log("Выведи данные больше 20:",arrToArr[i][j]);
    }
  }
}