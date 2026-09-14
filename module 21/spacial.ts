function calculateTax(amount: number| string|null, taxRate: number): number {
    if(amount === "string"){
        amount = parseFloat(amount);
    }
    return amount * taxRate;
}

const totalAmount: number = 100;
const taxRate: number = 0.15;
// null
const myFuture: number| null = null;
// any
const myvar: any = "Hello, World!";
// --------------------------not imported----------------------------
// unknown
const myUnknownVar: unknown = 42;

// never