#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance:number = 20000; //Doller
let myPin:number = 1504;
let pinAnswer = await inquirer.prompt([
{
   name: "pin",
  message: "Enter Your Pin",
  type: "number",
}    
]);
if (pinAnswer.pin === myPin) {

    console.log("correct pin code!!!");


let operationAns = await inquirer.prompt([{
     
    name: "operation",
       message: "please select option",
       type: "list",
       choices: ["withdraw","check Your Balance","fastCash"], 
    }]);
        console.log(operationAns);

    if (operationAns.operation === "withdraw") {

        let amountAns = await inquirer.prompt([{

            name: "amount",
            message: "Enter your amount",
            type: "number",
        }]);
            myBalance -= amountAns.amount;
            console.log("your remaining balance is:" + myBalance)
    }
     else if(operationAns.operation === "check Your Balance") {
        console.log(`your balance is ${myBalance}`);

    }
     
  else if(operationAns.operation === "fastCash") {
        let fastAmount = await inquirer.prompt([{
            name: "fast",
            message: "How much money you want to withdraw",
            type: "list",
            choices: ["2000", "3000", "5000"]

        }]);

        if(fastAmount.fast === "2000") {
            myBalance -= fastAmount.fast;
            console.log("take your cash And card");
         console.log(`your remaining balance is ${myBalance}`);
        }

        if(fastAmount.fast === "3000") {
            myBalance -= fastAmount.fast;
            console.log("take your cash And card");
            console.log(`your remaining balance is ${myBalance}`);
        }
     if(fastAmount.fast === "5000") {
        myBalance -= fastAmount.fast;
        console.log("take your cash And card");
        console.log(`your remaining balance is ${myBalance}`);
     }
    }
}
else {
    console.log("you entered wrong pin, please input right pin");

}