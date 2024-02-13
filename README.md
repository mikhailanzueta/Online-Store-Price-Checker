# 2.2-decision-making-hw-price-checker
In this exercise you will create a script that determines how an online store should price items on its website. (Many people don't realize that websites like Amazon change the price of an item based on when you purchase it, the browser you use, and many other factors.)  

In this example, the store employee inputs the name of the item and its "base price" (i.e. the price before the store has applied any discounts or markups).  Then the employee answers questions that will impact the final price of the item: for example, if the purchaser arrived at the online store from a search engine, or if today is "Black Friday" (a big day for discounts), etc..

1. Create a web page called: "Store Price Generator"

2. Use prompt() to ask a few questions:

    Enter the name of the item:

    What is the base price of the item?

    Is today "Black Friday"? Answer yes or no.

    Did the purchaser find the product through a search engine? Answer yes or no.

    Did the purchaser visit a comparison-shopping site? Answer yes or no.

3. Now your script should create a message containing several sentences, based on the store employee's answers above. Your script should also increase or decrease the item price based on those answers. 

    Here is how your code should change based on the answers provided by the user:

        Is today "Black Friday"?

            If the answer is "yes" reduce the price by 25% and add this string to the message that will be displayed at the end: "Since it's Black Friday, we will reduce the price by 25%. "

            If the answer is "no" don't change the price at all and add this string to the message that will be displayed at the end: "It's not Black Friday, so the price didn't change for that. "

        Did the purchaser find the product through a search engine?

            If the answer is "yes" increase the price by 1% and add this string to the message that will be displayed at the end: "We will increase the price by 1% to pay the search engine. "

            If the answer is "no" don't change the price at all and add this string to the message that will be displayed at the end: "The customer didn't use a search engine, so the price didn't change for that. "

        Did the purchaser visit a comparison-shopping site?

            If the answer is "yes" reduce the price by 10% and add this string to the message that will be displayed at the end: "Since the customer visited a comparison-shopping site, we will reduce the price by 10%. "

            If the answer is "no" don't change the price at all and add this string to the message that will be displayed at the end: "The customer didn't visit a comparison-shopping site, so the price didn't change for that. "

    Below is a basic conditional statement that might appear in your code. Note, the example below doesn't have an else statement, which may be needed in your code. Also note that the first line inside the code block concatenates two strings (what's already saved in the variable message + the new string), and the second line adds 1% to the finalPrice variable (by multiplying the price saved in the variable finalPrice by 1.01).

if (searchEngine === "yes") {

message += "The purchaser came through a search engine, so we will increase the price by 1%. ";

finalPrice *= 1.01;

};


4. When it's finished with this logic, your script should alert something like the following:

    "The base price for the [item] is $[basePrice]. Since it's Black Friday, we will reduce the price by 25%. We will increase the price by 1% to pay the search engine. Since the customer visited a comparison-shopping site, we will reduce the price by 10%. The final price is $[finalPrice]."

    You can record this message in the console, with an alert, or in the HTML on the page.

5. Do not use JavaScript concepts that have not been taught in class to accomplish this task. You should be able to complete this task using prompts, the Number() method, if...else statements, comparison operators, assignment operators, and arithmetic operators.

6. When you are done, create a new repo on Github called "Online Store Price Checker" and push your work into your master branch.

7. Hint: You may need to look up the .toFixed() number method to manipulate how your price displays.
