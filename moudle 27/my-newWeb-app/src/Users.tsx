const users : User[] = [
{name: "omar sunny", inLoggedIn: true},
{name: "omar faruk", inLoggedIn: false},
{name: "omar osman", inLoggedIn: true},
{name: "omar doile", inLoggedIn: false},
];

export default function Users() {
    return (
    <div>
        {
            users.map(user => <userCard name={user.name} />)
        }
    </div>    
    )
}