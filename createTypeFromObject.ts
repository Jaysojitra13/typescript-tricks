const user = {
  name: "john",
  age: 28
}

// this will create type from above object
type User = typeof user;

const user2: User = {
   age: 23,
   name: "jane"
}
