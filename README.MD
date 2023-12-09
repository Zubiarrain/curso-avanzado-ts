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

