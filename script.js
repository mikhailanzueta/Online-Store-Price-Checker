// Prompt the user for the name of the item:
let item = prompt("What is the name of the item?:")
// prompt the user for the base price of the item:
let basePrice = Number(prompt(`What is the price of ${item}?`));
// prompt the user for black friday:
let blackFriday = prompt("Is today black friday?");
// prompt user for search engine:
let searchEngine = prompt("Did the purchaser find the product through a search engine?");
// prompt the user for comparison-shopping site:
let comparisonSite = prompt("Did the purchaser visit a comparison-shopping site?");

let reducedPrice =  0.25;
let reducedPrice2 = 1.01;
let reducedPrice3 = 0.10;
let newPrice;
let newPrice2;
let newPrice3;
let finalPrice;
let discount;
let message = `The base price for the ${item} is ${basePrice}. `

//console.log(`The base price of ${item1} is ${basePrice}.`);

// Ask user if today is black friday. 
// If the answer is "yes" reduce (discount) the price by 25%. 
// add "Since it's Black Friday, we will reduce the price by 25%. ";

if (blackFriday === "yes") {
    message += `Since it's Black Friday, we will reduce the price by 25%. `
    discount = basePrice *  reducedPrice;
    newPrice = basePrice - discount;
    console.log(message);
    console.log(`The new price is ${newPrice.toFixed(2)}`);
} else {
    message += `It's not Black Friday, so the price didn't change for that. `
    console.log(message);
    console.log(basePrice.toFixed(2));
} 

// Ask user if they found the product through a search engine
// If the answer is "yes", increase the price by 1%, and add the message
// If the answer is "no", don't change the price and add the message

if (searchEngine === "yes" && blackFriday === 'yes') { // if both are yes, apply discount and add 1%
    message += `We will increase the price by 1% to pay the search engine.`
    console.log(message);
    newPrice *= reducedPrice2;
    newPrice2 = newPrice;
    console.log(`The new price is ${newPrice2.toFixed(2)}`)
} else if (searchEngine === 'yes' && blackFriday != 'yes') { // if searchEngine is yes but blackFriday is "no" apply 1% only
    message += `We will increase the price by 1% to pay the search engine.`
    basePrice *= reducedPrice2;
    newPrice2 = basePrice;
    console.log(message);
    console.log(`The new price is ${newPrice2.toFixed(2)}`);
} else if (searchEngine != "yes" && blackFriday != "yes") { // if both are no, display the original base price
    message += `The customer didn't use a search engine, so the price didn't change for that.`
    console.log(message);
    console.log(basePrice.toFixed(2));
} else { // if searchEngine is no, but blackFriday is "yes" apply discount only
    message += `The customer didn't use a search engine, so the price didn't change for that.`
    discount = basePrice *  reducedPrice;
    newPrice = basePrice - discount;
    console.log(message);
    console.log(newPrice.toFixed(2));
}

newPrice2 = newPrice;

// Ask the user if the customer visited a comparison-shopping site
// If the answer is "yes", reduce (discount) the price by 10% and add the message
// If the answer is "no", don't change the price and add the message

if (comparisonSite === "yes") {
    message += `Since the customer visited a comparison-shopping site, we will reduce the price by 10%.`
    console.log(message);
    discount = newPrice2 * reducedPrice3;
    newPrice3 = newPrice2 - discount;
    finalPrice = newPrice3
    console.log(`The final price is ${finalPrice.toFixed(2)}`);
} else if (blackFriday === "yes" && searchEngine === "yes" && comparisonSite != "yes") { // if 'blackFriday' and 'searchEngine' are 'yes', but comparisonSite is 'no',
    finalPrice = newPrice2;                                                              // display 'newPrice2'
    message += `The customer didn't visit a comparison-shopping site, so the price didn't change for that.`
    console.log(message);
    console.log(newPrice2.toFixed(2));
    console.log(`The final price is ${finalPrice.toFixed(2)}.`);
} else if (blackFriday === "yes" && searchEngine != "yes" && comparisonSite === "yes") {
    message += `Since the customer visited a comparison-shopping site, we will reduce the price by 10%.`
    discount = newPrice2 * reducedPrice3;
    newPrice3 = newPrice2 - discount;
    finalPrice = newPrice3;
    console.log(message);
    console.log(newPrice3.toFixed(2));
    console.log(`The final price is ${finalPrice.toFixed(2)}`);
} else {
    message += `What you entered is not valid`;
    console.log(message);
}
