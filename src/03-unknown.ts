// ANY
let anyVar: any
anyVar = true;
anyVar = undefined
anyVar = 1

anyVar.doSomething()

let isNew: boolean = anyVar // No detecta errores por trabajar con un any

// UNKNOWN
let unknownVar: unknown
unknownVar = true;
unknownVar = undefined
unknownVar = 1

unknownVar.doSomething() // Falla porque debes hacer verificacion de tipo antes

if (typeof unknownVar == 'string') {
  unknownVar.toUpperCase() // con una verificacion te deja usar funciones
}

let isNew2: boolean = unknownVar// Falla porque debes hacer verificacion de tipo antes

if (typeof unknownVar == 'boolean') {
  let isNew2: boolean = unknownVar // con una verificacion te deja hacer la asignacion
}

const parse = (str:string): unknown => {
  return JSON.parse(str);
}

