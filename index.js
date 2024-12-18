let express = require('express');
// const { resolve } = require('path');
let cors = require('cors');

let app = express();
const port = 3000;
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// q.1
app.get('/cart-total', (req, res) => {
  newItemPrice = parseFloat(req.query.newItemPrice);
  cartTotal = parseFloat(req.query.cartTotal);
  Total = newItemPrice + cartTotal;

  res.send(Total.toString());
});

// q.2

function memberdiscount(cartTotal, isMember) {
  if (isMember === 'true') {
    return cartTotal - cartTotal * 0.1;
  } else {
    return 'No Discount applied';
  }
}

app.get('/membership-discount', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember;
  let finalPrice = memberdiscount(cartTotal, isMember);

  res.send(finalPrice.toString());
});

// Q.3
app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let TaxPrice = (cartTotal * 5) / 100;

  res.send(TaxPrice.toString());
});

// Q.4
function deliveryTime(shippingMethod, distance) {
  if (shippingMethod === 'express') {
    return distance / 100;
  } else if (shippingMethod === 'standard') {
    return distance / 50;
  }
}

app.get('/estimate-delivery', (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);

  let time = deliveryTime(shippingMethod, distance);

  res.send(time.toString());
});

// Q.5
app.get('/shipping-cost', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let cost = weight * distance * 0.1;

  res.send(cost.toString());
});

// Q.6
app.get('/loyalty-points', (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let points = purchaseAmount * 2;

  res.send(points.toString());
});
