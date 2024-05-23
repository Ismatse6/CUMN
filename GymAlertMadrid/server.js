const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


app.use(bodyParser.json());


// Configurar Express para servir archivos estáticos desde la carpeta "assets"
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Definir la ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});


// Manejar la solicitud POST para la ruta "/scrape"
app.post('/scrape', async (req, res) => {
  const { email, password } = req.body;
  console.log('Datos de inicio de sesión:', { email, password });
  

  try {
      // Ejecutar el script de scraping con los datos del formulario
      const { navigateWebPage } = require('./app.js');
      
      await navigateWebPage(email, password);

      // Responder con un código de estado 200 para indicar que todo está bien
      res.sendStatus(200);
  } catch (error) {
      console.error('Error en el scraping:', error);
      // Si ocurre un error, responder con un código de estado 500 (error interno del servidor)
      res.sendStatus(500);
  }
});



// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});


// Definir la ruta para servir el archivo HTML de salida
app.get('/output', (req, res) => {
  res.sendFile(path.join(__dirname, 'output.html'));
});