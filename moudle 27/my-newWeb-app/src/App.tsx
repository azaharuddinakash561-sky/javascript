import Todo from './Todo';
import './App.css'

function App() {

  return (
    <>
    <h1>what is jsx</h1>
    <Gadgets></Gadgets>
    <Hello></Hello>
    <Devloper language="JavaScript" experience="5 years"/>
    <Todo task="take a break" time={10} />
    </>
  )
}
function Gadgets() {


  const gadGets = {
    border: "3px solid green"
  }
  return(
    <div style={gadGets}>
      <h1>what is xml</h1>
  <h1>what is xml</h1>
  <h1>what is xm</h1>
    </div>
  );
}
function Hello(){
  return(
    <>
    <h1>hello worlds </h1>
    </>
  )
}

function Devloper(props){
  return(
    <>
    <div className='student hello'>
    <h4>programming language:{props.language}</h4>
    <h4>experience:{props.experience}</h4>
    </div>
    </>
  )
}
export default App
