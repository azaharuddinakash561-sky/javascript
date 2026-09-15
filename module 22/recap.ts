// function with optional parameter
function buyBook(title: string, price: number, discount?: number): string {
    if(discount === undefined) {
        discount = 0;
    }
    return `You bought "${title}" for $${(price - discount).toFixed(2)}.`;
}
// object literal with type annotation

const tubeLight: {
    brand: string,
    color: string,
    price: number,
    isAvailable: boolean
}={
    brand: "Philips",
    color: "White",
    price: 15.99,
    isAvailable: true
}