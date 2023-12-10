//Nico:string => [N,i,c,o]:string[] (y viceversa)

export function parseStr(input:string): string[]
export function parseStr(input:string[]): string

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); //string
  } else if (typeof input === 'string') {
    return input.split('') // string[]
  }
}

const rtaArray = parseStr('Nahu') //ahora detecta que la variable es un array
console.log(rtaArray)

const rtaStr = parseStr(['N','a','h','u'])
console.log(rtaStr)
