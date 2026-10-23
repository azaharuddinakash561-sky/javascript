import {useState} from "react"
export default function Batter(){
    const [score, setScore] = useState(0)

    const handleClick = () =>  {
        setScore(score + 1);
    }
    return(
        <div>
            <h1>Score: {score} </h1>
            <button onClick = {handleClick}>add 1</button>
            <button onClick = {() => setScore(score + 2)}>add 2</button>
            <button onClick = {() => setScore(score + 4)}>add 4</button>
            <button onClick = {() => setScore(score + 6)}>add 6</button>
        </div>
    )
}