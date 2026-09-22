"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChaiShop {
    title;
    soldItem = [];
    constructor(title) {
        this.title = title;
    }
    buy(name, price) {
        this.soldItem.push({ name, price });
    }
    totalSold() {
        const total = this.soldItem.reduce((acc, item) => acc + item.price, 0);
        return total;
    }
}
const shop1 = new ChaiShop("Tea shop");
shop1.buy("Tea", 30);
console.log(shop1.totalSold());
//# sourceMappingURL=method.js.map