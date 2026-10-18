interface TodoProps {
    task: string;
    time?: number;
}

function Todo(props: TodoProps) {
    // const {task, time} = props;
    return(
         
        <li>do this work: {props.task} at {props.time} </li>
    )
}

export default Todo;


// const {task, time} = {task: "take a break", time: "10"}; 