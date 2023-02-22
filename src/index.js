// Fichero src/index.js

// Ejecutar con:
//   env $(cat .env | grep -v '^#' | xargs) node src/index.js
//   node -r dotenv/config src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const MySql = require('mysql2/promise');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: '25mb' }));

// DB varibales
const PAGINATION_LIMIT = 20;

console.log('ENV VARIABLES:');
console.dir(process.env);

// Arrancamos el servidor en el puerto 3000
const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.get('/users', (req, res) => {
  const response = {
    users: [{ name: 'Sofía' }, { name: 'María' }],
  };
  res.json(response);
});

server.get('/api/projects', (req, res) => {
  MySql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  }).then((connection) => {
    connection
      .connect()
      .then(() => {
        console.log('Conectado con el identificador ' + connection.threadId);
        const query = 'SELECT * FROM projects LIMIT ? OFFSET ?';
        connection.query(query, [PAGINATION_LIMIT, 0]).then(([projectsResultSet]) => {
          res.json(projectsResultSet);
        });
      })
      .catch((err) => {
        console.error('Error de conexion: ' + err.stack);
      });
  });
});
