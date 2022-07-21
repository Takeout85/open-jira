# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```bash
  docker-compose up -d
```

- El -d, significa **detached**

- MongoDB URL Local:

```text
  mongo://localhost:27017/entriesdb
```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

- MongoDB URL Local:
  
```text
  MONGO_URL=mongodb://localhost:27017/entriesdb
```

- Reconstruir los modulos de node y levantar Next

```bash
  npm install
  npm run dev
```

## Llenar la base de datos con inforcacion de pruebas

Llamar a:

```url
  https://localhost:3000/api/seed
```
