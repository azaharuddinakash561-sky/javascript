enum Day {
    sunday,
    monday, 
    tuesday, 
    wednesday, 
    thursday, 
    friday, 
    saturday 
}


let offday = Day.sunday;
console.log(Day.monday);

if (offday === Day.sunday || offday === Day.friday) {

}

enum Roles {
    admin = "ADMIN",
    user = "Moduratro",
    guest = "GUEST"
}

console.log(Roles.admin); // "ADMIN"

const nandu = {
    name: "Nandu",
    role: Roles.Moduratro
}

enum APIStatus {
    loading = "LOADING",
    pending = "PENDING",
    success = "SUCCESS",
    error = "ERROR"
}