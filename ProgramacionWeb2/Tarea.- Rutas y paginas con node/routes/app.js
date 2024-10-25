const express = require("express");
const pageRoutes = require("./pages");

const app = express();
const PORT = 3010;

app.use(express.static('public'));


app.use('/', pageRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
