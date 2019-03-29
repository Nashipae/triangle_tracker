function triangle(){
var userInput1= parseInt(document.triangle_inputs.length1.value);
var userInput2= parseInt(document.triangle_inputs.length2.value);
var userInput3= parseInt(document.triangle_inputs.length3.value);
var text;
var img;
var inputs = [];

if((userInput1+userInput2 >userInput3) && (userInput1+userInput3 >userInput2) && (userInput3+userInput2 >userInput1
)){
//Equilateral Triangle Evaluation (For an equilateral triangle, all sides must be equal.)

 if(userInput1===userInput2 && userInput2===userInput3 && userInput1===userInput3){
  alert("Your triangle is an equilateral triangle.");
  text="form an equilateral triangle."; 
}

// For an isosceles triangle, two sides are exactly equal.

else if((userInput1 === userInput2 && userInput3 !== userInput1 && userInput3!==userInput2)||(userInput2 === userInput3 && userInput1 !== userInput2 && userInput1!==userInput3)||(userInput1 === userInput3 && userInput2 !== userInput1 && userInput2!==userInput3)&&(userInput1+userInput2 >userInput3 && userInput1+userInput3 >userInput2 && userInput3+userInput2 >userInput1)){
  alert("Your triangle is an isoscecles triangle.");
  text="form an isosceles triangle.";
}

// For a scalene triangle, none of the sides is equal. However, the sum of any two sides of the triangle must be greater than the third side.

else if((userInput1!==userInput2 && userInput2!==userInput3 && userInput1!==userInput3) && (userInput1+userInput2 >userInput3 || userInput1+userInput3 >userInput2 || userInput3+userInput2 >userInput1)&&(userInput1+userInput2 >userInput3 && userInput1+userInput3 >userInput2 && userInput3+userInput2 >userInput1)){
  alert("Your triangle is a scalene triangle.");
  text="form a scalene triangle.";
}
}
// Where no triangle is formed
else{alert("Your lengths DON'T make a triangle!");
text="DON'T make a triangle!";}

inputs.push([userInput1,userInput2,userInput3]);
document.getElementById("form_output").innerHTML ="Your lengths "+inputs+" "+text; 
}
// document.getElementById("form_output").innerHTML =