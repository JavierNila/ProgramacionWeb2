const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Instanciar
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// analizar los datos del cuerpo de las solicitudes HTTP, especificamente los datos que provienen de formulario HTML enviados atraves de propiedad POST y GET

// motor de plantillas para html de forma dinamica
app.set('view engine', 'ejs');

// Configurar la carpeta de archivos estáticos (unicamente la que contiene estilos)
app.use(express.static('public'));

// Credenciales para DB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql', //En esta parte lo cambie todo para las credenciales que tengo en mi MySQL
    database: 'node_crud',
    port: 3306  //Lo mismo con el puerto ya que el mio lo tengo en el 3306 pero se puede cambiar las credenciales para que funione en otro equipo
});

// Conectar a la DB
db.connect((err) => {
    if (err) {
        console.error(`Error al conectar con la base de datos: ${err.message}`);
    } else {
        console.log('Conexión a la base de datos realizada exitosamente.');
    }
});

// Puerto
const port = 3036;  //Tuve que remover el hostname porque no funcionaba al momento de correr el programa
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor está en ejecución en http://localhost:${port}`);
});

// Mostrar la lista de usuarios
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    // trabajar con la conexion
    db.query(query, (err, results) => {
        if (err) {
            //mensaje de error para el usuario
            console.error(`Error al recuperar datos: ${err.message}`);
            res.send('Error al recuperar datos.');
        } else {
            res.render('index', { users: results });
        }
    });
});

// Mostrar la página de agregar usuario
app.get('/add', (req, res) => {
    res.render('add');
});

// Agregar usuario
app.post('/add', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err) => {
        if (err) {
            console.error(`Error al insertar usuario: ${err.message}`);
            res.send('Error al insertar usuario.');
        } else {
            res.redirect('/');
        }
    });
});

// Editar usuario
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al obtener usuario de la base de datos');
            res.send("Error al obtener usuario");
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

// Actualizar informacion de usuario editado
app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (err) => {
        if (err) {
            console.error('Error al actualizar usuario');
            res.send('Error al actualizar usuario.');
        } else {
            res.redirect('/');
        }
    });
});

// Eliminar 
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error(`Error al eliminar usuario: ${err.message}`);
            res.send('Error al eliminar usuario.');
        } else {
            res.redirect('/');
        }
    });
});
