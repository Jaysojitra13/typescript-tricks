const user = {
  name: "adf",
  age: 34
};

// this will work
user.name = 'jay';


const user1 = {
  name: "adf",
  age: 34,
  education: {
    degree: "BE"
  }
} as const;

// this won't work. Because 'as const' will make all the nested keys constant.
user.name = 'asdf';
user.education.degree = 'asdf';


const numbers = [1,2] as const;

// Same apply for arrays as well. If there is 'as const' then we can't push anything in array
numbers.push(4);


const user = {
  readonly name: "adf",
  age: 34,
  readonly education: {
    degree: "BE" // we can change this because readonly is applied to parent level.
  }
};

// as name is only readonly we can't update it's value. Readonly only apply at first level not in sub level
user.name = 'a'; //wrong
