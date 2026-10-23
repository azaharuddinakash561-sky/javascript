// export default function Counter() {
//     const [count, setCount] = useState(0);
//     const handleClick = () => {
//         setCount(count + 1);
//     }
//     return (
//         <div>
//             <h1>Counter: </h1>
//             <p> Current Value: {count}</p>
//             <button onClick={handleClick}>Increase</button>
//         </div>
//     )
// }

import {useState} from "react"
export default function Counter() {
    // react hook to manage state
const [count, setCount] = useState(0);
// handleClick function to update the state when button is clicked
    const handleClick = () => {
        setCount(count + 1)
    }
// rendering the component
    return (
        <div>
            <h1>Counter</h1>
            <p>Current Value: {count}</p>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}