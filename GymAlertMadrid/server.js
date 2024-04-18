const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar Express para servir archivos estáticos desde la carpeta "assets"
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Definir la ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});