type User = {
  name: string;
  age: number;
  profession?: string;
}

const user: User = {
  name: "adsf",
  age: 33,
  profession: "Engineer"
}

// Error - profession is optional and it might come as null or undefined and we bind type as string
const output: string = user.profession;

// to omit above scenario use !
const output: string = user.profession!;
