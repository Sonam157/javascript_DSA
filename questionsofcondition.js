//to check whether the number is odd or even
 let n =2;
 if(n%2==0){
    console.log("number is even");

} else {
    console.log("number is odd");
}


// consider three integer values and find minimum value among the given input values
let x = 8 , y = 9,z = 10;
if (x<y && x<10){
    console.log("x is the smallest number");
} 
else if(y<x && y <z)
    console.log("y is the smallest  number");
 else{
    console.log("z is the smallest number");
 }

 //triangle
 let s=6 , r=20 ,t=8;
 if(s+r>t && r+t>s && s+t>r){
    console.log(" we can have triangle");
 } 
 else{
    console.log('we cant have triangle');
 }
 // special case of triangle
  let p = 10;
  let q =15;
  let o =10;
  if (p==q &&p===o && q==o){
    console.log("equalateral triangle")
  }else if(p!=q && q!= o && o!=p){
    console.log("scalene")
  }else{
    console.log("isoscalene")
  }