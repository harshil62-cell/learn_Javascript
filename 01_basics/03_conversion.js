let score="33";
let valueInNumber=Number(score)
console.log(valueInNumber)
let score1="33abc"
let vin=Number(score1)
console.log(typeof vin)//type shows it is number
console.log(vin)//actually it is not a number
let a=null
let b=undefined
let a1=Number(a)//converts to 0
let b1=Number(b)//shows NaN
console.log(a1)
console.log(b1)
//similarly when we conver boolean true to number it will show 1 and false will show 0
console.log(typeof NaN)//type of NaN is number
//1=>true 0=>false ""=>false "harshil"=>true from datatype to boolean
//****************operations******************* */
let str1="Harshil"
let str2=" Vasani"
let str3=str1+str2//concatenation
console.log(str3)
console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32
//this is done according to ecma guidelines tc39
console.log(+true)//1
console.log(+"")//0