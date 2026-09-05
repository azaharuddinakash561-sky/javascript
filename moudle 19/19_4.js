const createLifeCounter = ()=>{
    let lives = 3;


    return()=>{
        if(lives >0){
            lives--;
        }
        console.log(lives)
    }
}
const azaharLifeUpdate = createLifeCounter()
const uddin = createLifeCounter()
const zamal = createLifeCounter()
const udaiMan = createLifeCounter()
const jall = createLifeCounter()
console.log("azaharLifeUpdate-->",azaharLifeUpdate())
console.log("azaharLifeUpdate-->",azaharLifeUpdate())
console.log("uddin-->",uddin())
console.log("jall-->",jall())
console.log("udaiMan-->",udaiMan())
console.log("zamal-->",zamal())
console.log("jall-->",azaharLifeUpdate())
