type userRole = "admin" | "user" |"moderator"| "guest";

interface User {
    name: string;
    role: userRole;
    email: string;
}

interface Admin extends User {
    permissions: string[];
}


interface Moderator extends User {
    moderatedSections: string[];
}   

const bigBoos: Admin = {
    permissions: ["manage_users", "edit_content"],
    name: "Big Boos",
    role: "admin",
    email: "azahar@gmail.com",
};

