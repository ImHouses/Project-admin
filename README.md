# Administrador de proyectos

Aplicación para administrar proyectos desarrollada en el **stack MEAN**.

## Despliegue en servidor local

Para usar la aplcación con un servidor local primero se necesita compilar la aplicación con el comando `ng build` y después
se corre el servidor (ExpressJS) con el comando `node server`.

Se abrirá un 'endpoint' en la dirección http://localhost:3000

Cualquier URL introducida que no sea un endpoint para la API será redirigido a la aplicación de Angular.

## API

La aplicación presenta una API totalmente funcional hecha conforme al stack MEAN, usando como web server **ExpressJS** y como
sistema manejador de bases de datos **MongoDB**.

### API Endpoints


Los endpoints que tiene la API son los siguientes, usando como esta URL como base `http://localhost:3000/api/`.

- `http://localhost:3000/api/companies` El cual mostrará como resultado un JSON con todas las empresas y los proyectos de cada una.
- `http://localhost:3000/api/projects` El cual mostrará como resultado un JSON con todos los proyectos y la empresa de cada uno (**GET**). 
Si se usa el método **POST** se añadirá un nuevo proyecto a la base de datos.
- `http://localhost:3000/api/projects/:projectId` Este es un endpoint para los métodos **PUT** y **DELETE**, pudiendo eliminar o editar un proyecto.
