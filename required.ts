type User = {
  name: string;
  age?: number; // optional
  gender?: string; // optional
};

// Below line will make all the fields required from above type
type RequiredUser = Required<User>;
  
// scenario 1 - false
const user: RequiredUser = {
  "name": "a"  
}
