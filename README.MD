## Clase 2: Configuracion del proyecto con ts-node

Dentro de nuestro proyecto, vamos a hacer el `git init` y generamos el gitignore con [**gitignore.io](http://gitignore.io)** para windows, linux, mac y node.js.

También hacemos el `npm init -y`, instalamos typescript en el proyecto con `npm i typescript -D` y podemos verificar que este completamente instalado con `npx tsc —version`.

Luego vamos a hacer el `npx tsc --init` para obtener nuestro archivo tsconfig.json.

Igualmente configuramos nuestro .editorconfig de la siguiente manera para tener las mismas configuraciones que el resto del curso. Es necesario tener la extensión de editor config para que las especificaciones del archivo sean tomadas por el editor de código.

```xml
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false>
```

Con la librería [**ts-node**](https://typestrong.org/ts-node/) podemos correr typescript en node sin tener que transpilarlo. Para hacerlo vamos a ejecutar:

```bash
npm install -D ts-node
```

Luego para correr nuestro código, hacemos:

```bash
#npx ts-node ruta/archivo.ts
npx ts-node src/demo.ts
```

<aside>
💡 Si bien ts-node nos va a permitir ejecutar typescript en node, esto es en desarrollo, para producción vamos a tener que traspilarlo igualmente.

</aside>

## Clase 3: Enums

Los enums nos permiten configurar un set de opciones, son parecidos a los literal types pero su uso es distinto.

Lo usamos con la palabra reservada `enum` y denominamos nuestro enum con el nombre en mayúsculas. Dentro de los enums, las keys las solemos escribir en mayúsculas, y los values pueden ser de tipo number o string

```tsx
enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

type User = {
  username: string;
  role: ROLES;
}

const francoUser: User = {username: "Franco", role: ROLES.ADMIN}
```

Las ventajas son que yo puedo ver las opciones de lo que voy a asignar de forma directa a nuestras propiedades, y a su vez, en caso de que la propiedad de nuestro enum cambie en un futuro, también lo hará en su implementación.

---

Vamos a analizar una librería para hacer aplicaciones multiplataforma llamada [**capacitor](https://capacitorjs.com/)** para ver cómo hacen uso de los enums y como estos nos ayudan.

Si bien no lo vamos a poder ver en funcionamiento como tal, ya que lo que hace este plugin de capacitor es levantar una cámara, nos va a servir para ver como se utilizan los enums en el mismo. Lo instalamos con:

```tsx
npm install @capacitor/camera
```

Con el ejemplo de la documentación vamos a poder analizar el poder de los enums.

```tsx
import { Camera, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });

  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  var imageUrl = image.webPath;

  // Can be set to the src of an image now
  imageElement.src = imageUrl;
};
```

Al explorar las propiedades, podemos ver las opciones predefinidas en para que no exista la posibilidad de equivocarnos y pasar un argumento inválido.


## Clase 4: Tuplas

Nos permiten definir un array fuertemente tipado tanto en posición como en el “límite de elementos”, esto por defecto no esta en javascript ([**Esta propuesto en los ES Proposals en Stage 2**](https://www.proposals.es/proposals/Record%20%26%20Tuple)).

```tsx
const prices: (number | string)[] = [1,3,2,1,2,'as']
prices.push(2)
prices.push('Hello')

let user:[string,number,boolean] = ['Franco', 25,true];

//user = [36,'Franco',24]
//user = []
user = ['Fran', 25, false]
```

Con las tuplas además podemos hacer desestructuración:

```tsx
const [username, age] = user;
console.log(username); //'Franco'
```

Este tipo de desestructuración las podemos ver en el react hook de `useState`.

<aside>
❗ Las tuplas de Typescript solo entran en acción en casos de reasignación de variables, pero igualmente nos siguen permitiendo hacer `.push()` que en el caso de la proposal no, ya que no van a tener métodos que muten directamente el array.

</aside>

**No debemos confiarnos del lÍmite en longitud, ya que este puede cambiar mutando el array.** Lo único que debemos “respetar” para poder hacerlo, es utilizar los mismos tipos que especificamos en la tupla.

```tsx
let user:[string,number] = ['Franco', 25];
console.log(user) // ['Franco', 25]

user.push('Carrara');
//user.push(true); DA ERROR PORQUE NO ESTA BOOLEAN ESPECIFICADO EN LA TUPLA
console.log(user) // ['Franco', 25, 'Carrara']
//console.log(user[2]) ESTO DA ERROR
console.log(user.at(-1)) // 'Carrara'

user.map(item => console.log(item))
// 'Franco'
// 25
// 'Carrara'
```

Con las tuplas, también podemos pasar un numero indefinido de valores de un tipo:

```tsx
const args: [boolean, ...number[], string] = [true, 2, 3, 4, 5, 6, "seven"]
console.log(args)

//[ true, 2, 3, 4, 5, 6, "seven"]
```

También podemos pasar valores opcionales

```tsx
let newTuple2: [boolean, string, number?] = [true, "variable"]; //Number is optional
console.log(newTuple2);

//[ true, "variable" ]
```

<aside>
💡 Créditos a Victor por los dos últimos ejemplos sacados de su [**comentario**](https://platzi.com/comentario/3540961/).

</aside>

## Clase 5: Unknwon types

Es un tipo que nos dice que la variable es desconocida, es similar a `any`, pero sin quitar el análisis de código estático que nos brinda TypeScript.

```tsx
let anyVar: any;
anyVar = true;
anyVar = 'Franco'
anyVar = undefined;

let isNew: boolean = anyVar; //Esto funciona porque anyVar, al tener any podría ser un boolean.

let unknownVar: unknown;
unknownVar = true;
unknownVar = "Franco";
unknownVar = 25;
unknownVar = {};

//unknownVar.toUpperCase(); Aca marca error porque no sabe si va a ser un string.

if (typeof unknownVar === "string"){
  unknownVar.toUpperCase()
}
```

También la podemos usar en funciones si no sabemos exactamente que nos va a devolver.

```tsx
const parse = (str: string): unknown => {
	return JSON.parse(str)
}
```

Para realizar el ejemplo de la reasignación, lo podemos hacer de la siguiente manera:

```tsx
let unknownVar: unknown;
unknownVar = true;
unknownVar = "Franco";
unknownVar = 25;
unknownVar = {};

//let isNew: boolean = unknownVar; Nos da error ya que pide que verifiquemos los tipos.
let isNew: boolean;

if (typeof unknownVar === "boolean"){
  isNew = unknownVar
}
```

TypeScript, en este caso, a diferencia de como pasa con `any`, nos marca error si no verificamos los tipos antes.

##
