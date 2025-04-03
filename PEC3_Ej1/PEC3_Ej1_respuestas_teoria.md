# Ventajas de TypeScript sobre JavaScript

## 1. Tipado estático

En el código de `ejer1.js` no se indica ningún tipo para las variables. En cambio, en `ejer1.ts` se define una interfaz con los tipos explícitos para cada variable.

TypeScript ayuda a prevenir errores relacionados con tipos de datos incorrectos antes de que el código se ejecute.

## 2. Mantenibilidad

En el código `ejer1.ts`, al declarar la interfaz `Dog`, se marcan cuáles son los requisitos de los objetos `dog`. En caso de querer modificar `Dog` en un futuro, TypeScript notificará automáticamente todos los lugares donde se utiliza la interfaz `Dog`.

Además, la función `baby` está tipada para recibir y devolver un objeto de tipo `Dog`. Esto ayuda a mantener coherencia con la estructura esperada.

## 3. Legibilidad

Al usar interfaces y tipos explícitos, en este caso, al declarar la interfaz `Dog`, todos los objetos `dog` deben contener `kind` de tipo `string` y `weight` de tipo `number`. Esto es un tipo de documentación muy valioso, especialmente para proyectos grandes.