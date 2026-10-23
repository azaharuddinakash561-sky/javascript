import useState from "react"
export default function Batter(){
    const [score, setScore] = useState(0)

    const handleClick = () =>  {
        setScore(score + 1);
    }
    return(
        <div>
            <h1>Score: {score} </h1>
            <button onClick = {handleClick}>add 1</button>
        </div>
    )
}