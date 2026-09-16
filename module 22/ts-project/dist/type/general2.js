"use strict";
// function useState(initialValue){
Object.defineProperty(exports, "__esModule", { value: true });
//     let value = initialValue;
//     function setState(newValue){
//         value = newValue;
//     }
//     return[value, setvalue]
// }
// const [count, setCount] = useState(0);
// -------------------------------------------------------
function useState(initialValue) {
    let value = initialValue;
    function setState(newValue) {
        value = newValue;
    }
    return [value, setState];
}
useState("0");
useState(0);
useState(false);
userState(email, "", isLooggedin, false);
userState(null);
//# sourceMappingURL=general2.js.map