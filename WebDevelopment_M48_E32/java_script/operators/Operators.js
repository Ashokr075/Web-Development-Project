/*
operators->operators are keywords and special characters which is used for performing operations by using single, double and triple operands.
one operand->unary operators
two operands->binary operators
three operands->ternary operators
*/
// arithmetic operators(+ - * / % **)
console.log(10+5);//15
console.log(10-5);//5
console.log(10*5);//50
console.log(10/5);//2
console.log(10%5);//0
console.log(10**2);//100

// relational(comparison) operators(== === != !== < > <= >=)
console.log(10==10);//true
console.log(10=="10");//true
console.log(10==="10");//false
console.log(10<5);//false
console.log(10>5);//true
console.log(12<=11);//false
console.log(11>=12);//false
console.log(10!=10);//false
console.log(10!=="10");//true

// logical operators(&& || !(condition))
let isHallTicketPresent=true;
let isPenPresent=true;
let isPencilPresent=true;
console.log(isHallTicketPresent && isPenPresent && isPencilPresent);//false
console.log(isHallTicketPresent && isPenPresent || isPencilPresent);//true
console.log(!(isHallTicketPresent && isPenPresent && isPencilPresent));//false

// assignment operators(= += -= *= /= %= **=)
let number=100;//assignment operation
number=150;//re-assignment operation
console.log(number+=10);//compound assignment operation
console.log(number-=10);//150
console.log(number*=10);//1500
console.log(number/=10);//150
console.log(number%=10);//0
console.log(number**=10);//0

// unary operators(++ -- typeof instanceof delete void)
let playerLives=3;//[3]
console.log(--playerLives);//[2]2
console.log(--playerLives);//[1]1
console.log(--playerLives);//[0]0
let gameScore=0;//[0]
console.log(++gameScore);//[1]1
console.log(++gameScore);//[2]2
console.log(++gameScore);//[3]3
console.log(++gameScore);//[4]4
console.log(++gameScore);//[5]5
console.log(gameScore);
console.log(gameScore,typeof gameScore);//'number'
let numberArray=[10,20,30];
let laptopObject={
    brandName:"hp",
    price:50000,
    color:"DarkGray"
}
console.log(numberArray instanceof Array);
console.log(laptopObject instanceof Object);
console.log(gameScore instanceof Object);

// string concatenation operator(+)
let greetings="HelloWorld";
console.log(greetings+"!!");

// ternary operators(simplified form of if else statement)
let age=18;
let positiveResult="The given age '"+age+"' is eligible for voting.";
let negativeResult="The given age '"+age+"' is not eligible for voting.";
let result=(age>=18)? positiveResult:negativeResult;
console.log(result); 