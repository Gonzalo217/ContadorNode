const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// Redirigir / a /index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Puerto configurable (Vercel usa process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});