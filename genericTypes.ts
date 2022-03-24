type Box<T> = {
  name: string,
  content: T
}

const stringBox: Box<string> = {
  name: 'string box',
  content: 'A string'
}

const numberBox: Box<number> = {
  name: 'Number Box',
  content: 50
}

console.log(stringBox.content.toUpperCase());
console.log(numberBod.content * 5);
