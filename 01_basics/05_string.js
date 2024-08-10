let name="Harshil"
let marks="87"
console.log(`My name is ${name} and my marks are ${marks}`)
//this is called as string template literal or string interpolation
console.log(name.length)
console.log(name.toUpperCase())//will not change the original string
console.log(name.charAt('2'))
console.log(name.indexOf('a'))
console.log(name.substring(0,5))
console.log(name.slice(-7,-5))//we can use negative values with slice
let str="harshil vasani  "
console.log(str.trim())//will remove all white spaces which are at start and at end
console.log(str.replace("h","v"))//replace(old,new)
console.log(str.includes('harshil'))
console.log(str)
let password='harshil@123@vasani'
console.log(password.split('@'))//returns array 