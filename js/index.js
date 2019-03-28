
var equilateral=[];
var userInput1= parseInt(prompt("Please enter the 1st length of your triangle."));
var userInput2= parseInt(prompt("Please enter the 2nd length of your triangle."));
var userInput3= parseInt(prompt("Please enter the 3rd length of your triangle."));

if((userInput1+userInput2 >userInput3) && (userInput1+userInput3 >userInput2) && (userInput3+userInput2 >userInput1
)){
//Equilateral Triangle Evaluation (For an equilateral triangle, all sides must be equal.)

 if(userInput1===userInput2 && userInput2===userInput3 && userInput1===userInput3){
  alert("Your triangle is an equilateral triangle")
}

// For an isosceles triangle, two sides are exactly equal.

else if((userInput1 === userInput2 && userInput3 !== userInput1 && userInput3!==userInput2)||(userInput2 === userInput3 && userInput1 !== userInput2 && userInput1!==userInput3)||(userInput1 === userInput3 && userInput2 !== userInput1 && userInput2!==userInput3)&&(userInput1+userInput2 >userInput3 && userInput1+userInput3 >userInput2 && userInput3+userInput2 >userInput1)){
  alert("Your triangle is an isoscecles triangle");
}

// For a scalene triangle, none of the sides is equal. However, the sum of any two sides of the triangle must be greater than the third side.

else if((userInput1!==userInput2 && userInput2!==userInput3 && userInput1!==userInput3) && (userInput1+userInput2 >userInput3 || userInput1+userInput3 >userInput2 || userInput3+userInput2 >userInput1)&&(userInput1+userInput2 >userInput3 && userInput1+userInput3 >userInput2 && userInput3+userInput2 >userInput1)){alert("Your triangle is a scalene triangle");
}
}
else{alert("Your lengths DONT make a triangle!");}