// TypeScript Utility types

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  

  const updateUser = (user: Partial<User>) => {
    console.log("Updating user:", user);
  };
  
  updateUser({ name: "John Doe" }); 
  

  type UserPreview = Pick<User, "id" | "name">;
  const userPreview: UserPreview = { id: 1, name: "Alice" };
  console.log(userPreview);
  
 
  type UserWithoutEmail = Omit<User, "email">;
  const userWithoutEmail: UserWithoutEmail = { id: 2, name: "Bob", age: 25 };
  console.log(userWithoutEmail);
  