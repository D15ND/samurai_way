let flat = {
  room1: {
    hasWindow: true,
    color: "white",
    conditioner: {
      manufacture: "mitsubishi",
      power: 50,
    }
  },
  room2: {
    hasWindow: false,
    color: "white",
    conditioner: null
  },
  room3: {
    hasWindow: false,
    color: "white",
    conditioner: null
  }
}
console.log(flat.room1.conditioner.manufacture);