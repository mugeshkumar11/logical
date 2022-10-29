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


var input = 153;
var sum = 0;
var temp =input;
while(input >0){

  let rem = (input % 10);
  let multi =(rem *rem *rem);
    sum+=multi
  input = (input-rem)/10;

}
console.log(sum);

if(temp == sum){
  console.log("its amstrong")
  }else{
    console.log("its not amstrong")
  }