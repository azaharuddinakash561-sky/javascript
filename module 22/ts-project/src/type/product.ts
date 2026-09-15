// ai ta array type er jonno use kora hoy
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
};

const prducts: Product[] = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 699.99, category: "Electronics" },
  { id: 3, name: "Headphones", price: 199.99, category: "Electronics" },
  { id: 4, name: "Shoes", price: 79.99, category: "Fashion" },
  { id: 5, name: "T-shirt", price: 19.99, category: "Fashion" },
  { id: 6, name: "Coffee Maker", price: 49.99, category: "Home Appliances" },
  { id: 7, name: "Blender", price: 29.99, category: "Home Appliances" },
  { id: 8, name: "Book", price: 14.99, category: "Books" },
  { id: 9, name: "Notebook", price: 4.99, category: "Stationery" },
  { id: 10, name: "Pen", price: 1.99, category: "Stationery" },
];


function printId(id: string | number) {
  console.log(id);
}

printId(101);       // ✅
printId("A101");    // ✅
printId(true);      // ❌

type Status = "pending" | "success" | "failed";

let orderStatus: Status;

orderStatus = "pending";  // ✅
orderStatus = "success";  // ✅
orderStatus = "failed";   // ✅

orderStatus = "cancelled"; // ❌ Error

interface Student {
  name: string;
  roll: number;
  major: string;
  gpa: number;
  status: "active" | "inactive";
}

const robin: Student = {
  name: "Robin",
  roll: 101,
  major: "Computer Science",
  gpa: 3.8,
  status: "active",
};