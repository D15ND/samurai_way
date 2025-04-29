function sum(num1, num2) {
  const result=num1+num2;
  return result;
}
console.log(sum(5,14));

function userWelcom(userName, organizationName) {
  const res="Hello, "+userName+". "+"Welcom to "+organizationName.toUpperCase()+"!";
  return res;
}
console.log(userWelcom("Nick", "Ergo"));