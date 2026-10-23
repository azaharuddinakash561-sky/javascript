export default function Cart(){
    let count = 0;
const handleClick = () => {
    count++;
    
}
    return(
        <div>
            <h1>Shopping Chart</h1>
            <p>Items in cart: {count}</p>
            <button onClick={handleClick}>Add one more to cart</button>
        </div>
    )
}