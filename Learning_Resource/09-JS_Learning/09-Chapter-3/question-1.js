// 1. Inventory Stock Aggregation


// Problem Statement
// You are given a list of product transactions. Each transaction contains:

// productName
// type (either "purchase" or "sale")
// quantity

// Your task is to calculate the final stock quantity for each product.
// Input

const transactions = [
  { product: "Laptop", type: "purchase", quantity: 10 },
  { product: "Mobile", type: "purchase", quantity: 20 },
  { product: "Laptop", type: "sale", quantity: 4 },
  { product: "Mobile", type: "sale", quantity: 5 },
  { product: "Tablet", type: "purchase", quantity: 7 },
  { product: "Laptop", type: "purchase", quantity: 3 }
];
 
// Expected Output

// {
//   Laptop: 9,
//   Mobile: 15,
//   Tablet: 7
// }


// In this question i follow an approch first iterate on transaction array then
// each array index conatins object then iterate on that and calculate there quantity
// and i also create i answer object those store the quantity



// -----------------------------------------------  Main Logic -----------------------------------------------------

// this object is created for store the object

const finalq = {};


// here i used an for each loop to iterate over array and use arrow fuction to create logic how to find and final quantity


transactions.forEach((x) => {

    // first here i check the final object contain product or not if not then create and assign an value

    if (!finalq[x.product]) {
        finalq[x.product] = 0;
    }

    // Then here first i check if type of order is purches then increase the quantity

    if (x.type === 'purchase') {
        finalq[x.product] += x.quantity;
    } 

    // if not the above condition then its an sale then here i subtract the quantity

    else if (x.type === 'sale') {

        if (finalq[x.product] !== 0) {
            finalq[x.product] -= x.quantity;
        }
    }


});

console.log(finalq);