interface Product {
  id: number;
  title: string;
  url: string;
  price: number;
}

interface Customer {
  id: number;
  name: string;
  surname: string;
  address: string;
  district: string;
  city: string;
}

interface Seller {
  id: number;
  company: string;
}

interface Order {
  id: number;
  customer: number;
  seller: number;
  date: Date;
  payment: string;
  shipping_address: string;
  purchased_items: number[];
  total_price: number[];
}

const products: Product[] = [
  {
    id: 5,
    title: "iPhone 13 Pro",
    url: "https://abc.com/iphone-13-pro",
    price: 22000,
  },
  {
    id: 6,
    title: "iPhone 13 Pro Max",
    url: "https://abc.com/iphone-13-pro-max",
    price: 25000,
  },
  {
    id: 7,
    title: "iPhone X",
    url: "https://abc.com/iphone-x",
    price: 10000,
  },
  {
    id: 8,
    title: "iPhone SE",
    url: "https://abc.com/iphone-se",
    price: 8000,
  },
  {
    id: 9,
    title: "iPhone 12",
    url: "https://abc.com/iphone-12",
    price: 15000,
  },
];

const customers: Customer[] = [
  {
    id: 12,
    name: "Berkay",
    surname: "Gediz",
    address: "A St.",
    district: "XX",
    city: "YY",
  },
  {
    id: 13,
    name: "Ahmet",
    surname: "Zediz",
    address: "Z St.",
    district: "XX",
    city: "YY",
  },
  {
    id: 14,
    name: "Uzay",
    surname: "Mediz",
    address: "Y St.",
    district: "XX",
    city: "YY",
  },
  {
    id: 15,
    name: "Özge",
    surname: "Yediz",
    address: "X St.",
    district: "XX",
    city: "YY",
  },
  {
    id: 16,
    name: "Hasan",
    surname: "Kediz",
    address: "W St.",
    district: "XX",
    city: "YY",
  },
];

const sellers: Seller[] = [
  { id: 34, company: "Textile Plus Ltd." },
  { id: 35, company: "Software Path Inc." },
  { id: 36, company: "Studio81 Ltd." },
  { id: 38, company: "96Atelier Ltd." },
  { id: 39, company: "Spacecode Ltd." },
];

let orderDate = new Date();

const orders: Order[] = [
  {
    id: 101,
    customer: customers[0].id,
    seller: sellers[0].id,
    date: (orderDate = new Date(2023, 4, 11)),
    payment: "Credit Card",
    shipping_address: `${customers[0].address} ${customers[0].district} ${customers[0].city}`,
    purchased_items: [products[0].id, products[3].id],
    total_price: [products[0].price, products[3].price],
  },
  {
    id: 102,
    customer: customers[1].id,
    seller: sellers[1].id,
    date: (orderDate = new Date(2023, 4, 12)),
    payment: "Prepaid",
    shipping_address: `${customers[1].address} ${customers[1].district} ${customers[1].city}`,
    purchased_items: [products[1].id, products[2].id],
    total_price: [products[1].price, products[2].price],
  },
  {
    id: 103,
    customer: customers[2].id,
    seller: sellers[2].id,
    date: (orderDate = new Date(2023, 4, 13)),
    payment: "Cash on Delivery",
    shipping_address: `${customers[2].address} ${customers[2].district} ${customers[2].city}`,
    purchased_items: [products[0].id, products[1].id],
    total_price: [products[0].price, products[1].price],
  },
  {
    id: 104,
    customer: customers[3].id,
    seller: sellers[3].id,
    date: (orderDate = new Date(2023, 4, 14)),
    payment: "Credit Card",
    shipping_address: `${customers[3].address} ${customers[3].district} ${customers[3].city}`,
    purchased_items: [products[1].id, products[3].id],
    total_price: [products[1].price, products[3].price],
  },
  {
    id: 105,
    customer: customers[4].id,
    seller: sellers[4].id,
    date: (orderDate = new Date(2023, 4, 15)),
    payment: "Prepaid",
    shipping_address: `${customers[4].address} ${customers[4].district} ${customers[4].city}`,
    purchased_items: [products[2].id, products[3].id],
    total_price: [products[2].price, products[3].price],
  },
];

const kdv = 1.2;
const totalAmounts: number[] = [];
const orderIds: number[] = [];

console.log("------- Total Amount Paid Including KDV for Each Order -------");
for (let i = 0; i < orders.length; i++) {
  let totalPrice = 0;

  for (let j = 0; j < orders[i].total_price.length; j++) {
    totalPrice += orders[i].total_price[j];
  }
  const totalWithKDV = totalPrice * kdv;
  console.log(
    `Order ID: ${orders[i].id}, Total Amount Paid (with KDV): ${totalWithKDV}`
  );
  totalAmounts[i] = totalWithKDV;
  orderIds[i] = orders[i].id;
}

console.log("\n------- Total Amount Paid Including KDV for All Orders -------");
console.log(`Order IDs: ${orderIds}`);
let totalAmount = 0;
for (let x = 0; x < totalAmounts.length; x++) {
  totalAmount += totalAmounts[x];
}
console.log(`Total amount paid for all orders = ${totalAmount}`);
