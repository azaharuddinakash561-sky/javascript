interface BookProps {
    name: string;
}
export default function Book({name}: BookProps) {
    return <li>Book Name: {name}</li>
}
// export default function Book({name}: {name:string}) {
//     return <li>Book Name: {name}</li>
// }