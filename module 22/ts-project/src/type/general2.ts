// function useState(initialValue){

//     let value = initialValue;

//     function setState(newValue){
//         value = newValue;
//     }
//     return[value, setvalue]
// }

// const [count, setCount] = useState(0);

// -------------------------------------------------------
function useState<T>(initialValue: T):[T() => void]{
   let value = initialValue;
   function setState(newValue: T){
       value = newValue;
   }
   return [value, setState];
}

useState<string>("0");
useState<number>(0);
useState<boolean>(false);

interface user{
    name: string,
    isLoggedIn: boolean
}

userState<user>(email: "", isLooggedin: false)
userState<user|null>(null)