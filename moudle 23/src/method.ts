class ChaiShop{
    title: string;
    soldItem:{name:string; price:number}[] = []


    constructor(title:string){
        this.title = title
    }

    buy (name: string, price: number){
        this.soldItem.push({name, price})
    }

    totalSold(){
        const total= this.soldItem.reduce((acc, item) => acc+ item.price, 0)
            return total
        
    }
}

const shop1 = new ChaiShop("Tea shop")
shop1.buy("Tea", 30)
console.log(shop1.totalSold())