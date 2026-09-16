"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["sunday"] = 0] = "sunday";
    Day[Day["monday"] = 1] = "monday";
    Day[Day["tuesday"] = 2] = "tuesday";
    Day[Day["wednesday"] = 3] = "wednesday";
    Day[Day["thursday"] = 4] = "thursday";
    Day[Day["friday"] = 5] = "friday";
    Day[Day["saturday"] = 6] = "saturday";
})(Day || (Day = {}));
let offday = Day.sunday;
console.log(Day.monday);
if (offday === Day.sunday || offday === Day.friday) {
}
var Roles;
(function (Roles) {
    Roles["admin"] = "ADMIN";
    Roles["user"] = "Moduratro";
    Roles["guest"] = "GUEST";
})(Roles || (Roles = {}));
console.log(Roles.admin); // "ADMIN"
const nandu = {
    name: "Nandu",
    role: Roles.Moduratro
};
var APIStatus;
(function (APIStatus) {
    APIStatus["loading"] = "LOADING";
    APIStatus["pending"] = "PENDING";
    APIStatus["success"] = "SUCCESS";
    APIStatus["error"] = "ERROR";
})(APIStatus || (APIStatus = {}));
//# sourceMappingURL=enum.js.map