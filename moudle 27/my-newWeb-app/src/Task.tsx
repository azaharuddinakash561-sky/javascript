// type <--ooo dea jaba 
interface TaskProps {
    name: string;
     isDone: boolean;
}
function Task ({name, isDone}: TaskProps) {
    return isDone === true? <li>completed : {name} </li> : <li> pending: {name}</li>
//    if(isDone === true){
//        return <li>Completed: {name}</li>
    
//    }else{
//    return(
//        <li>Pending: {name}</li>
//    )
// }
}
// function Task ({name, isDone}: TaskProps) {
//    if(isDone === true){
//        return <li>Completed: {name}</li>
    
//    }
//    return(
//        <li>Pending: {name}</li>
//    )
// }
export default Task
// ai vabea oo kora jai export default
// export default function Task ({name}: TaskProps) {
//     return(
//         <li>Pending: {name}</li>
//     )
// }