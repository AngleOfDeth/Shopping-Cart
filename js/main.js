let allProducts = [
  { id: 1, name: "burger", price: 24 },
  { id: 1, name: "milk", price: 35 },
  { id: 1, name: "sandwich", price: 51 },
  { id: 1, name: "pizza", price: 13 },
];

let userProducts = [
  { id: 1, name: "phone", price: 53 },
  { id: 2, name: "labtop", price: 64 },
];

let addProduct = prompt("Enter Your Product Name");

let watchProduct = allProducts.some(function (item) {
  return item.name === addProduct;
});
watchProduct ? alert("your Product is here !") : alert("sorry !");
