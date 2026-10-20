// import Todo from './Todo';
import './App.css'
import Book from './book';
import Users from './Users';
import UserCard from './userCard';
// import Task from './Task';

function App() {
// const books = ["physics","chemistry","maths","biology", "english"]
// books.map(book =>)
  return (
    <>
    
    <Users></Users>
    <UserCard></UserCard>
    
    {/* {
      books.map(book => <Book name={book} />)
    } */}
    {/* {books.map(book => <li>{book}</li>)}  */}
    {/* <h1>what is jsx</h1>
    <Gadgets></Gadgets>
    <Hello></Hello>
    <Devloper language="JavaScript" experience="5 years"/>
    <Todo task="take a break" time={10} /> */}
    {/* <Task name  = "complete assignment" isDone={true}></Task> */}
    {/* <Task name = "finish module" isDone = {false}></Task> */}
    {/* <Task name = "use facebook compane" isDone = {true}></Task> */}
    </>
  )
}
// function Gadgets() {


//   const gadGets = {
//     border: "3px solid green"
//   }
//   return(
//     <div style={gadGets}>
//       <h1>what is xml</h1>
//   <h1>what is xml</h1>
//   <h1>what is xm</h1>
//     </div>
//   );
// }
// function Hello(){
//   return(
//     <>
//     <h1>hello worlds </h1>
//     </>
//   )
// }

// function Devloper(props){
//   return(
//     <>
//     <div className='student hello'>
//     <h4>programming language:{props.language}</h4>
//     <h4>experience:{props.experience}</h4>
//     </div>
//     </>
//   )
// }
export default App
