//basically data types are divided into primitive and non primitve types
//primitive-call by value 
//7 types-
//1.String
//2.Number
//3.Boolean
//4.null
//5.undefined
//6.symbol
//7.BigInt

//Non Primitive -reference type
//Arrays
//Objects
//functions

//JavaScript is dynamically typed language . we do not need to declare data type of variable explicitly
const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId);//false 

const bigNumber=1234567889000000898989989898989898988984985948958948984985948958484849859489584859n//BigInt
console.log(typeof bigNumber)

/**memory */
//two types of memory
//stack and heap memory
//primitive type uses stack memory
//non primitive type uses heap memory
