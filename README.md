# OpenJira 
### Descripción
##### _En OpenJira podrás crear tu lista personalizada de tareas de manera rápida y sencilla. Además,implementa una función de arrastrar y soltar, lo que significa que podrás actualizar fácilmente el estado de tus tareas simplemente arrastrándolas a la sección correspondiente._

##### Visita la página web oficial de [OpenJira](https://dall-e.takeoutcode.com/)

### Tecnologías usadas
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

# Requisitos
- Node.js
- yarn
> Para este proyecto se utilizó yarn como administrador de paquetes.
> En caso de no tener yarn, puedes instalarlo con el siguiente comando:

```
npm install --global yarn
```
### _Instalación del repositorio_
> Clonar Repositorio con HTTPS:
```
git clone https://github.com/TakeoutCode/open-jira.git
```

> Clonar Repositorio con SSH:
```
git clone git@github.com:TakeoutCode/open-jira.git
```
> En caso de que se haga un fork, instalar con el enlace que se generó.

### Para correr localmente, se necesita la base de datos

```bash
  docker-compose up -d
```

- El -d, significa **detached**

### _Instalación de dependencias_

```
yarn install
```
#### _Renombra el archivo para las variables de entonrno_
En la raiz del proyecto, renombra el archivo **.env.template** a **.env.local**

```
MONGO_URL=mongodb://localhost:27017/entriesdb
```

Una vez que tengas las claves, agrega cada una a su respectivo campo sin agregar espacios ni comillas de ningún tipo.

### _Inicializar app_
```
  yarn dev
```

## Llenar la base de datos con inforcacion de pruebas

Llamar a:

```url
  https://localhost:3000/api/seed
```

# Contribuir
- Si deseas contribuir al desarrollo de OpenJira, siéntete libre de hacer un fork de este repositorio y enviar un pull request con tus mejoras.

# Autor
- OpenJira fue desarrollado por **Braulio Quezada @TakeoutCode**.- 

# Licencia
- OpenJira se distribuye bajo la licencia (MIT). Para más información, revisa el archivo LICENSE en este repositorio.

**_Espero que esta información te sea útil. Si necesitas más ayuda, no dudes en preguntar. ¡Que tengas un buen día!_**
