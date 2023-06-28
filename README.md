# Storage Google Drive - Variacode

Servidor interno para guardar archivos

## Requisitos

- Crear Aplicacion en google cloud
- Configuracion de credenciales ID de clientes OAuth 2.0
- Crear cuenta de servicio y generar una clave json, el cual te dara la informacion CLIENT_EMAIL y PRIVATE_KEY.
- Agregar o verificar en Apis y servicios que se encuentre Google Drive API, gracias al CLIENT_EMAIL tendras acceso al FOLDER_ID
- Node.js version 16.14 o superior

## Instalacion

- Clona el repositorio [storage](https://github.com/aldiaz-variacode/storage.git)
- Ejecuta el comando `npm i`. Para instalar las dependencias.

## Configuracion

- Copia el archivo .example.env y renombralo como .env
- Abre el archivo .env y modifica los valores de configuracion segun corresponda.
- Si el ambiente donde vas a correr la app tiene su propia configuracion para variables de entorno configura los valores en el ambiente.

## Uso

- Ejecuta el comando `node app.js`
- Abre tu navegador en el dominio configurado en el ambiente que trabajas con el puerto asignado. Deberias tener el mensaje 'Storage On'