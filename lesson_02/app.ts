// Defining a base interface with optional and readonly properties
interface Person {
    readonly id: number;
    name: string;
    age?: number; // Optional property
  }
  

  interface Employee extends Person {
    department: string;
    readonly salary: number;
    position?: string; // Optional property in the extended interface
  }
  

  const employee: Employee = {
    id: 101, // Readonly property
    name: "John Doe",
    department: "Engineering",
    salary: 50000, // Readonly property
  };

  
  console.log(employee);
  