console.log("connected with external file");

// if else
var a = 1;
var b= 2;
if(a+b>4){
    console.log(a+b);
}
else if(a+b<1){
    console.log(a*b);
}
else
console.log("hi");
   

//for loop 1.for each 2. for of 3. for in

for(var num = 0; num < 11; num = num + 2){
 console.log(num);
}




//output:apple peach orange
let fruits = ['apple','peach','orange'];
for(item of fruits){
    console.log(item);
}

//0 1 2 
let fruit = ['apple','peach','orange'];
for(item in fruit){
    console.log(item);
}
var a = [1,2,3,4,5]
a.forEach(item => console.log(item));

//unary operators
//prefix and postfix
var num = 0;
while(num < 5){
    console.log(num);
    num++; //num= num+ 1
}
do{
    console.log(num);
    num++;
}while(num < 5)

var itr = 10;
console.log(itr++);//assign the value and increment//10
console.log(itr);//11

console.log(++itr);//12
console.log(itr)//12
  //arthmatic operator
  //shift operrators
  //>> <<
  var a = 8, b = 2;
  console.log(a>>b); //8*2
  console.log(b<<b);// 8/4

  //type coercion === can top coercion
  //bitwise opertors // & | 
  //logical operatos && || !
  //assignment operator =
  //ternary operator condition ? teue:false;


  //hoisting
  console.log(x); //undefined
  var x = 100;
  console.log(x);//100

//     console.log(x); //undefined //error
//   let x = 100;
//   console.log(x);//100 
// const once we declare cant reassign the bvalue
 for(var n = 0; n<5;n++){
    console.log(n);
 }
 console.log(n);

 for(let n = 0; n<5;n++){
    console.log(n);
 }
 console.log(n);//error














 
