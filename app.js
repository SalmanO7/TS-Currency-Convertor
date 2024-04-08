import inquirer from 'inquirer';
console.log("\n Welcome Salman Currancy Convertor project \n");
const currancy = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    PKR: 278.12,
    INR: 74.57,
    KDIN: 0.31,
    INDR: 15906.05,
    BANGT: 109.83,
    CHY: 7.23,
    IRRIAL: 42075.00
};
let objCurrancy = Object.keys(currancy);
let condition = true;
while (condition) {
    let userInput = await inquirer.prompt([
        {
            name: "from",
            message: "Select From Currency",
            type: "list",
            choices: objCurrancy
        },
        {
            name: "to",
            message: "Select To Currency",
            type: "list",
            choices: objCurrancy,
        }, {
            name: "amount",
            message: "Enter Amount For Convert",
            type: "number"
        }
    ]);
    let fromSelectCurrancy = currancy[userInput.from];
    let toSelectCurrancy = currancy[userInput.to];
    let amountEnter = userInput.amount;
    let baseAmount = amountEnter / fromSelectCurrancy;
    let result = baseAmount * toSelectCurrancy;
    console.log(`\n Your Convert Currancy :  ${result.toFixed(2)} \n`);
    let moreCurrancyConvert = await inquirer.prompt({
        name: "moreCurrancyConvert",
        message: "You Want to add more currancy to Convert ??",
        type: "confirm",
    });
    condition = moreCurrancyConvert.moreCurrancyConvert;
}
