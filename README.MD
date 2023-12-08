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

##
