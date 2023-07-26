// arithmetic operator
let x = 10;
let y = 3 ;
console.log(x + y);//addition
console.log(x - y);//subtraction
console.log(x * y);//multiplication
console.log(x / y);// division    from whivh we will get  quotient
console.log(x % y);// division from which we will get  remainder
console.log(y**3);// exponent

// assignment operator
let a =  10;
a += 10;//a=a+10
console.log (a);
 a*=24;//a=a*24
 console.log(a);
 a %= 88;//a=a%88
  console.log(a);
a /=99;// a=a/99
console.log(a);
a -= 77; a=a-77
console.log(a);


//relational operator
console.log("x > y = " , x > y);
console.log("x < y = ",x < y);
console.log("x < =y",x<=y);
console.log("x > = y ",x>=y);

//logical operator(&& = and , or =|| , not = !)
console.log( false && true);
console.log(false || false);
console.log(true &&  true);
console.log((10>5) && (6<3));
console.log(!true);
console.log(10 && 6);// and  gate
console.log(6 && 10);
console.log(10 || 0); //or gate 
console.log(6 || 19);
console.log(0 || 0);


// bitwise operator are AND XOR XOR NOR
console.log(4 & 7);
console.log(5 & 7);// bitwise And
 console.log(5|6);//  bitwise or
 console.log(9|10);

 // Equality operator( == is called abstract equality operator,=== is called strict  equality operatore)
  let c= 1;
  let d = " sonam";/*== it also checks the of operand ,if the type is same it calls ===,if  type are not same then type conversion
   occur  then comparison is done.
       ==== - it checks types of both the operand  if the type is same it returns false but if the types are same then value comparision occur*/
        
  console.log("c==d=",c==d);
  console.log("c===d =",c===d)
