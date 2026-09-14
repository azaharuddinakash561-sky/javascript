const student :{
    name: string, 
    age: number,
     isEnrolled: boolean,
      courses: string[]
} = {
  name: "John Doe",
  age: 20,
  isEnrolled: true,
  courses: ["Math", "Science", "History"],
};
student.age  = 40; 
export { student };