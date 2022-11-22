// for loop

//var a = 20;


//for (let i=0; i<=a.length; i++){
//console.log(i);
//}

//while loop

//var b=11;

//while(b<=20){
 //   b++;

  //  console.log(b);
//}

//program to display next five text

//var n = 5;

//for(let i=1; i<=n; i++){
  //  console.log("mugesh");

//}

//sum of natural numbers

//var sum = 0;

//const n = 100;

//for (let i=0; i<=n; i++){
  //  sum+=i;
//}
//console.log("sum", sum);


//var a = [10,20,30,40,50,60,70,80]

//for(let i=0; i<=a.length; i++){
  //  console.log("a",[i]);
//}


//var a = [10,20,30,40,50,60,70,80]

//var max = 0;

//for(let i=0; i<=a.length; i++){


  //  if(max<a[i]){
    //    max=a[i]
    //}
    //console.log(max)
//}

// number reverse
// var value = 456;
// var num = 0;
// while(value>0){
  
//   var value2 = (value%10);
//   value = ((value-value2)/10);
//   num = ((num*10)+value2)
 
// }
// console.log(num);


// // reverse number adding
// var value = 456;
// var num = 0;
// while(value>0){
  
//   var value2 = (value%10);
//   value = ((value-value2)/10);
//   num = num+value2
 
// }
// console.log(num);

// //odd number
// var input = parseInt(prompt("enter value"));

// for (let i=0; i<input; i++){
//   if(i%2){
//     console.log(i,"odd");
//   }else{
//     console.log(i,"even");
//   }
// }

//7 divisible number

// var divide = parseInt(prompt("entervalue"));


// for(let i=0; i<divide; i++){
//   if(i%2==0){
//     console.log(i);
//   }
// }

// rever number to word

// var input = 456;

// while(input> 0){

// let rem = input%10

// if(rem==1){
//  console.log("one");
// }else if(rem==2){
//  console.log("two");
// }else if(rem==3){
//  console.log("three");
// }else if(rem==4){
//  console.log("four");
// }else if(rem==5){
//  console.log("five");
// }else if(rem==6){
//  console.log("six");
// }else if(rem==7){
//  console.log("seven");
// }else if(rem==8){
//  console.log("eght");
// }else if(rem==9){
//  console.log("nine");
// }else
// console.log("zero");

// input = ((input-rem)/10)

// };


//print  for  number in pattern
// var range = parseInt(prompt(""));


//   for(var i=0;i<=range;i++){
//     var str=" ";
//     for(var j=0;j<=i;j++){
    
//       str += "*";
//     }
//     console.log(str);
//   }

// AMSTRONG NOT AMSTRONG
// var input = 153;
// var sum = 0;
// var temp =input;
// while(input >0){

//   let rem = (input % 10);
//   let multi =(rem *rem *rem);
//     sum+=multi
//   input = (input-rem)/10;

// }
// console.log(sum);

// if(temp == sum){
//   console.log("its amstrong")
//   }else{
//     console.log("its not amstrong")
//   }


//all digit used amstrong 

// var input = 54748;
// var count  = 0;
// var result = input;
//  var sum = 0;
//  var result2 = result
// while(input> 0){
//   let rem = input % 10;
//    input = (input-rem)/10;
//    count+=1;
// }

// while(result>0){
//   let rem = result % 10;
//   result = (result-rem)/10;
//   sum += (rem**count) 
// }
// if(sum==result2){
//   console.log("its amstrong")
//     }else{
//      console.log("its not amstrong")
//   }
// console.log(sum);
// console.log(count);

// factorial number 

// var input = 5;
// var sum=1;
// for(let i=1; i<=input; i++){
//       sum*=i
      
// }
//  console.log(sum);

// fibonaci number

// var input = 8;
// var sum = 0;
// var n1=0;
// var n2=1;
// console.log(n1,n2);
// for(let i=0; i<=input; i++){
//   sum = (n1+n2)
//   n1 = n2
//   n2= sum
//   console.log(sum);
// }

//prime number

// var input = 15;
// var number = true;
// if (input===1){
//   console.log("not a odd and even")
// }else if(input>1){
// for(let i=2; i<input; i++){
//   if(input % i === 0){
//     number = false;
//   }
// }
// }
// if(number===true){
//   console.log("its a prime number")
// }else{
//   console.log("its not prime number");
// }


// program to print prime numbers between the two numbers

// var input = 20;

// for(let i=2; i<=input; i++){
//    var rem = (i/2)
//   var prime = true;
//   for(let j=2; j<=rem; j++){
//     if(i%j==0){
//       prime = false
//       break;
//     }
//   }

//   if(prime==true){
//     console.log("this is a prime",i);

//   }else{
//     console.log("not a prime number",i);
//   }
// }


//vowels word 

// var input = "mugeshkumar";
// input = input.toLowerCase();
// var count =0;
// // console.log(input[1]);
// for(let i=0; i<input.length; i++){
//   if(input[i]=="a" ||input[i]=="e" ||input[i]=="i" ||input[i]=="o" ||input[i]=="u" ){
//              count ++;
//   }
 
// }
// console.log(count);


//vowels

// var input = "mugeshkumar";
// var input2 = "sakthi";

// var count = 0;
// for(let i=0; i<input.length; i++){
//   if(input[i]=="a" ||input[i]=="e" ||input[i]=="i" ||input[i]=="o" ||input[i]=="u" ){
//                   count ++;
//        }
// }
// console.log(count);
// var count2 = 0;
// for(let i=0; i<input2.length; i++){
//   if(input2[i]=="a" ||input2[i]=="e" ||input2[i]=="i" ||input2[i]=="o" ||input2[i]=="u" ){
//               count2 ++;  
//       }
// }
// console.log(count2);

// if(count>count2){
//   console.log(input);
// }else if(count<count2){
//   console.log(input2);
// }else{
//   console.log(input,input2);
// }


// //palindrome 

// var input = 12321;
// var sum=0;
// var num = input
// while(input>0){
//   let value = (input%10);
//   input =((input-value)/10) 
//   sum = sum*10+value
// }
// console.log(sum);
// if(num == sum){
//   console.log("this is palindrome");
// }else{
//   console.log("this is not palindrome");
// }


// add and even number find and add

// var input = 6789;
// var sum = 0;
// while(input>0){
//  rem = input%10;
//   input = (input-rem)/10;

//   if(rem%2==0){
//     sum += rem;
   
//   }
  
// }

// console.log(sum);

// odd number find and add


// var input = 6789;
// var sum = 0;
// while(input>0){
//  rem = input%10;
//   input = (input-rem)/10;

//   if(rem%2!=0){
//     sum += rem;
   
//   }
  
// }

// console.log(sum);

//string method

//length
// let text = "Apple, Banana, Kiwi";
// let part = text.length;
// console.log(part);


//slice
// let text = "Apple Banana Kiwi";
// let part = text.slice(3,5,);
//  console.log(part);

//
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);
//  console.log(part);


/// REGARDS METHOD USED STRING
// var input = "kmugesh11199@gmail.com";
// console.log(input.match(/[a-zA-Z]+/g).join(""),input.match(/\W/g).join(""),input.match(/\d/g).join(""));


//console.log(input.);


// let email = "ravanth39840@gmail.com";

// let a = email.replace(/[^0-9]/g),
// (email.replace/[^A-Za-z0-9]/g);
// console.log(a);
// let b =a.split("");
// console.log(b);

// for (let i = 0; i < b.length; i++) {
//     if (b[i] % 2 === 0) {
//         console.log(b[i]);
//     }
// }

