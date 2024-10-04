// solution 1

let a=prompt("enter the number even or odd");
if(a %2 == 0){
    console.log("the number is even")
}
else{
    console.log("the number is odd")
}



// solution 2
// positive or negitive
let s=prompt('the number positive or negitive');
if ( s > 0 ) {
console.log('the number is positive')
}else if ( s < 0) {
    console.log('the number is negitive')    
} else {
    console.log('the number is zero')
}



// solution 3
// age
let age=prompt('enrer your age');

if( age < 10){
    console.log('Hi,child')
}
else if( age <18){
    console.log('Hi,teenager')
}
else{
    console.log('Hi,adult')
}



// solution 4
//  final grade
let grade=prompt('your final grade');
fullmarket=350;
console.log(((grade/fullmarket)*100) +"%")



// solution 5
// weather
let weather=prompt("what is the weather ?");
let Temperature= 20;
if( weather <= Temperature){
console.log('you should wear heavy cloths')
}
else if( weather < 40){
    console.log('as you like .....the weather is good')
}
else{
    console.log('you shoold wear light cloths ...because the weather is vary hot')
}



// // solution 6
// // a number is prime.
// let num =prompt("enter the number prime");
// if( num <2){
//     console.log("the number is not prime")
// }
// else if(num%2!== 0){
//     console.log("the number is prime")
//     }
// else if(2){
//     console.log("the number is prime")
//     }
// else if(2){
//     console.log("the number is prime")
//     }
// else{
//     console.log("the number is not prime")
// }

// let num =prompt("enter the number prime")
// if (num <= 1) {
//     console.log("the number is not prime")
// }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//                 console.log("the number is not prime")
//         }
//     }

// solution 7
// the year is a leap year
let year = prompt('enter the number of days in the year');
 if(year >=366){
    console.log('the year is a leap year')
 }
 else{
    console.log('the year isnot a leap year')
}



// solution 8
// temperatures
 let one=prompt("enter the first temperatures ");
 let two=prompt("enter the second temperatures ");
if(one<two){
     console.log('the highter temperatures is the second')
 }
else if(one>two){
    console.log('the highter temperatures is the first')
 }
 else{
    console.log('the two temperatures is the same')
 }



// solution 9
// array
let ar=prompt("the word");
let array=["one",'two','three'];
console.log(array.includes(ar))



// solution 10
// fist
let x_1 =prompt("the point x1 in ");
let x_2 =prompt("the point x2 in ");
if (Number(x_1)<Number(x_2)){
    console.log(x_2-x_1)
}
else{
    console.log(x_1-x_2)
}


// second
let y_1 =prompt("the point x1 in ");
let y_2 =prompt("the point x2 in ");
if (Number(y_1)<Number(y_2)){
    console.log(y_2-y_1)
}
else{
    console.log(y_1-y_2)
}