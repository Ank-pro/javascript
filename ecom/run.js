const ecom = require("./data.json");

// Q1 -- customer emails having orders > 3
const totalEmails = ecom
  .filter((data) => data.orders.length > 3)
  .reduce((acc, order) => {
    acc.push(order.email);
    return acc;
  }, []);

console.log(totalEmails);

// Q2 -- supplier having highest total sales amt

let maxAmt = 0;
const highestSales = ecom.reduce(
  (acc, sup) => {
    const maxOrder = sup.orders.reduce(
      (total, currOrder) => total + currOrder.payment.amount,
      0
    );

    return maxOrder > acc.totalSalesAmt
      ? { name: sup.name, totalSalesAmt: maxOrder }
      : acc;
  },
  { name: "", totalSalesAmt: 0 }
);

// console.log(highestSales);

// Q4 -- product categories with their total quantities sold

const res = {};

ecom.forEach(supp =>{
  supp.orders.forEach(order => {
    order.items.forEach(item =>{
      res[item.category] = (res[item.category] || 0) + item.quantity;
    })
  })
})

console.log(res);


/* Q6 -- function step1(value, callback) {
  setTimeout(() => {
    callback(null, value + 1);
}, 1000);
}

function step2(value, callback) {
setTimeout(() => {
    callback(null, value + 2);
}, 1000);
}

function step3(value, callback) {
setTimeout(() => {
    callback(null, value + 3);
}, 1000);
}

function processSteps(callback) {
step1(0, (err, result1) => {
    if (err) return callback(err);
    step2(result1, (err, result2) => {
        if (err) return callback(err);
        step3(result2, (err, finalResult) => {
            if (err) return callback(err);
            callback(null, finalResult);
        });
    });
});
}

processSteps((err, result) => {
if (err) {
    console.error("Error:", err);
} else {
    console.log("Final result:", result);
}
}); */


function processSteps() {
  step1(1)
      .then(step2)
      .then(step3)
      .then((res) => console.log("Final result:", res))
      .catch((err) => console.error("Error:", err));
}


