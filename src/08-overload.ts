//Nico:string => [N,i,c,o]:string[] (y viceversa)

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); //string
  } else {
    return input.split('') // string[]
  }
}

const rtaArray = parseStr('Nahu') // Como la funcion puede devolver strings y arrays no me permite inferir el tipo de esta variable
console.log(rtaArray)

const rtaStr = parseStr(['N','a','h','u'])
console.log(rtaStr)
