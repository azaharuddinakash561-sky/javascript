interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
  department?: string; // Optional property
}

const mark: Employee = {
  id: 1,
  name: "Mark",
  position: "Software Engineer",
  salary: 75000,
  department: "Engineering"
};
const jane: Employee = {
  id: 2,
  name: "Jane",
  position: "Product Manager",
  salary: 80000,
  department: "Marketing"
};

const employees: Employee[] = [mark, jane,{
    id: 3,
    name: "John",
    position: "Research Scientist",
    salary: 70000,
    department: "Research   "
}];

function printEmployeeDetails(employee: Employee): void {
  console.log(`ID: ${employee.id}`);
  console.log(`Name: ${employee.name}`);
  console.log(`Position: ${employee.position}`);
  console.log(`Salary: $${employee.salary.toFixed(2)}`);
}
printEmployeeDetails({name: "Alice", id: 4, position: "Data Analyst", salary: 65000, department: "Data Science"});
function displayEmployeeDetails ({id, name, position, salary, department}: Employee): void {
  console.log(`ID: ${id}`);
  console.log(`Name: ${name}`);
  console.log(`Position: ${position}`);
  console.log(`Salary: $${salary.toFixed(2)}`)
}