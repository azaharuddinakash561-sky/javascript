"use strict";
/**
 * Balance
 * Pin
 * Phone
 * History
 */
Object.defineProperty(exports, "__esModule", { value: true });
// access modifier: public, private, protectede
class BkashAccount {
    phone;
    blance;
    pin;
    history = [];
    constructor(phone, balance, pin) {
        this.phone = phone;
        this.blance = balance;
        this.pin = pin;
    }
    getBlance(pin) {
        if (this.pin === pin) {
            return this.blance;
        }
        return `PIN IS WRONG!`;
    }
}
const bkashAccount = new BkashAccount("3333333", 5555, 121);
// bkashAccount.blance = 0;
console.log(bkashAccount);
//# sourceMappingURL=accose-modifier.js.map