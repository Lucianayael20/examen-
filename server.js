const express = require('express');
const app = express();

// Lista de animales
const animals = ["Perro", "Gato", "Loro", "Tortuga"];

app.get('/animals', (req, res) => {
  res.json(animals);
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));