const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const taskRoutes = require('./routes/task');

app.use(express.json());

app.use('/', taskRoutes);

dbConnection();
//Carga la conexión con el servidor

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));