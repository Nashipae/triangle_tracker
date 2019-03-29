function triangle(){
  var userInput1= parseInt(document.triangle_inputs.length1.value);
  var userInput2= parseInt(document.triangle_inputs.length2.value);
  var userInput3= parseInt(document.triangle_inputs.length3.value);
  var text;
  var inputs = [];
  
  if((userInput1+userInput2 >userInput3) && (userInput1+userInput3 >userInput2) && (userInput3+userInput2 >userInput1
  )){
  //Equilateral Triangle Evaluation (For an equilateral triangle, all sides must be equal.)
  
   if(userInput1===userInput2 && userInput2===userInput3 && userInput1===userInput3){
    alert("Your triangle is an equilateral triangle.");
    text="form an equilateral triangle.";
    document.getElementById("image").innerHTML = '<img src="images/equilateral.jpg" alt="equilateral" height="150" width="150">';
  }
  
  // For an isosceles triangle, two sides are exactly equal.
  
  else if((userInput1 === userInput2 && userInput3 !== userInput1 && userInput3!==userInput2)||(userInput2 === userInput3 && userInput1 !== userInput2 && userInput1!==userInput3)||(userInput1 === userInput3 && userInput2 !== userInput1 && userInput2!==userInput3)&&(userInput1+userInput2 >userInput3 && userInput1+userInput3 >userInput2 && userInput3+userInput2 >userInput1)){
    alert("Your triangle is an isoscecles triangle.");
    text="form an isosceles triangle.";
    document.getElementById("image").innerHTML = '<img src="images/isosceles.jpg" alt="isosceles" height="150" width="150">';
  }
  
  // For a scalene triangle, none of the sides is equal. However, the sum of any two sides of the triangle must be greater than the third side.
  
  else if((userInput1!==userInput2 && userInput2!==userInput3 && userInput1!==userInput3) && (userInput1+userInput2 >userInput3 || userInput1+userInput3 >userInput2 || userInput3+userInput2 >userInput1)&&(userInput1+userInput2 >userInput3 && userInput1+userInput3 >userInput2 && userInput3+userInput2 >userInput1)){
    alert("Your triangle is a scalene triangle.");
    text="form a scalene triangle.";
    document.getElementById("image").innerHTML = '<img src="images/scalene.jpg" alt="scalene" height="150" width="150">';
  }
  }
  // Where no triangle is formed
  else{alert("Your lengths DON'T make a triangle!");
  text="DON'T make a triangle!";}
  
  inputs.push([userInput1,userInput2,userInput3]);
  document.getElementById("form_output").innerHTML ="Your lengths "+inputs+" "+text; 
  document.getElementById("image").innerHTML = '<img src="images/not_a_triangle.png" alt="not_a_triangle." height="150" width="150">';
  }