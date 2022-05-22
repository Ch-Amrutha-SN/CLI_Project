#! /usr/bin/env node

//const { Yargs } = require('yargs/build');


const args=require('yargs').argv;
//Yargs.version('1.0.0')
// console.log('Operation:' +args.operation);
// console.log('Value1:'+args.value1);
// console.log('value2:'+args.value2);
operation=args.operation;
num1=args.value1;
num2=args.value2;
if(operation==undefined 
    || num1==undefined 
    || num2==undefined){
    console.log('Error,Enter proper format');
    process.exit(9)
}
let result=fun();
function fun(){
    if(args.operation=='add'){
        ans=num1+num2;
        console.log(ans);
  }
  else if(operation=='sub'){
   ans=num1-num2;
   console.log(ans);
  }
  else if(operation=='mul'){
   ans=num1*num2;
   console.log(ans);
   }
   else if(operation=='div'){
   ans=num1/num2;
   console.log(ans);
   }
   else {
   console.log("Error")
   process.exit(9)
   }
}

