console.log("Hello")

let person: string | number

person = 'John'
console.log(person);
person = 123
console.log(person);
const id_card_number = (id: string | number) => {
    console.log(id);
}

id_card_number(10)

function client_id (id:string | number) {
    console.log(id);
    
}

client_id(20)


let info: (string | number) []

info = ['Rahi', 23]

console.log(info);

info.push('rimon')
console.log(info);

let data: [number, string]

data = [101, 'Tanvir']

data.push(103, 'Ritu')

console.log(data);

let names: Object;
names = { name: "John", age: 30 }

console.log(names);

let users : object[]

users = [
    {name: 'John', age: 20},
    {name: 'Jonu', age: 30},
    {name: 'Root', age: 40},
];
console.log(users);

let newUser: { name: string, age: number };

newUser = { name: "Rahi", age: 19 };

console.log(newUser);
type myCustomDataType = {
    name: string,
    age: number,
    isMarried: boolean,
    kids: string[],
    job: {
      title: string,
      salary: number,
    },
  };



  let allUsers : myCustomDataType[]


  allUsers = []

  let User : myCustomDataType

  User = {
    name: "John",
    age: 25,
    isMarried: false,
    kids: ["Jane", "Jack"],
    job: {
      title: "Software Engineer",
      salary: 100000,
    },
  };

allUsers.push(User)
console.log(allUsers);

// console.log(allUsers.push(User)) // return the length of the object
  
class User_todo {
    name: string;
    age: number | string;
    constructor(name: string, age: number | string) {
      this.name = name;
      this.age = age;
    }
  
    Show() {
      console.log(`username: ${this.name}, age: ${this.age}`);
    }
  }
  
  let user_todo = new User_todo("John", '20');
  user_todo.Show();
  
  let user2 = new User_todo("Jane", 30);
  user2.Show();

  const user = new User_todo("John", 20);
  user.Show();
  
  class Student extends User_todo {
    studentId: number;
    studentGender: string;
  
    constructor(
      name: string,
      age: number | string,
      studentId: number,
      studentGender: string
    ) {
      super(name, age);
      this.studentId = studentId;
      this.studentGender = studentGender;
    }
  
    Show() {
      console.log(
        `username: ${this.name}, age: ${this.age} studentId: ${this.studentId}, studentGender: ${this.studentGender}`
      );
    }
  }
  
  const student = new Student("rahi", 19, 502386, "male");
  student.Show();

  // Generic with a single parameter
function userInfo1<x>(user: x) {
    console.log(user);
  }
  
  userInfo1("Rahi");
  
  // Generic with nultiple single parameter
  function userInfo2<x, y>(user: x, active: y) {
    if (active) {
      console.log(user);
    }
  }
  
  userInfo2("Alamin", true);
  
  // user generic with arrow function
  const userInfo3 = <x, y>(user: x, active: y) => {
    if (active) {
      console.log(user);
    }
  };
  
  userInfo2("Naim", false);


