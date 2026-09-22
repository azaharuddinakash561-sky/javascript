/**
 * Balance
 * Pin
 * Phone
 * History
 */

// access modifier: public, private, protectede

class BkashAccount {
    public phone: string
    private blance: number
    private pin: number
    
    protected history: any = []

    constructor (phone:string,balance: number, pin: number ){
        this.phone = phone
        this.blance = balance
        this.pin = pin
        
    }

    getBlance (pin: number){
        if(this.pin === pin){
            return this.blance
        }
        return `PIN IS WRONG!`
    }
}

const bkashAccount = new BkashAccount ("3333333", 5555, 121)
// bkashAccount.blance = 0;
console.log(bkashAccount)