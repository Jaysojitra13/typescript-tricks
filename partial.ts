type User = {
  name: string;
  age: number;
};

// This line will make all the fields optional inside type
type PartialUser = Partial<User>;

// scenario: 1
const user: PartialUser = {
  "name": "a",
  "age": 19
}

// scenario: 2
const user: PartialUser = {
  "name": "a"
}
