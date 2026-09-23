import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hi i am akash</h1>
      
     <Persone />
     <Akaksh />
    </>
  )

}


function Persone(){

  
  return <p>i am here </p>
}

function Akaksh(){
  return(
    <>// its a fragment 
    <h3>my math is norway</h3>
    <h3>my math is norway</h3>
    <h3>my math is norway</h3>
    </>
  )
}

export default App
