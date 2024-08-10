const balance=new Number(100)//explicitly defined and it is object
console.log(balance)
console.log(typeof balance)
console.log(balance.toString())
console.log(typeof balance)
console.log(balance.toFixed(2))
console.log(balance.toPrecision(2))
/**Maths library in JS */
console.log(Math)
console.log(Math.abs(-90))
console.log(Math.round(4.64))
console.log(Math.floor(4.6))
console.log(Math.ceil(4.2))
console.log(Math.random())//gives random value between 0 to 1
console.log((Math.random()*10)+1)//to get random value between 1 to 10
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)