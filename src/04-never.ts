const withoutEnd = () => {
  while (true){
    console.log('Jijiji')
  }
}

const fail = (message:string) => {
  throw new Error(message);
}

const example = (input:unknown) => {
  if (typeof input === 'string'){
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not much')
}

console.log(example('Hola'))
console.log(example([123,15,13]))
console.log(example(256151))
