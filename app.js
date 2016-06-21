var express = require("express");
var app = express();

/* Motor de vistas y recursos estáticos */
app.set('view engine', 'pug');
app.use(express.static('public'));

/* Inicio Rutas */

app.get('/', function(req, res){
	res.redirect("/home");
});

/* Inicio Rutas Administracion */
app.get('/bank', function(req, res){
	res.render('index');
});
/* Fin Rutas Administracion */

/* Inicio Rutas Instituciones */
app.get('/users', function(req, res){
	res.render('index');
});
/* Fin Rutas Instituciones */

/* Inicio Rutas Usuarios */
app.get('/salir', function(req, res){
	res.render('index');
});
/* Fin Rutas Usuarios */

/* Fin Rutas */

app.listen(8080, function(error){
	if (error) return console.log("Error"), process.exit(1);
	console.log("Aplicación iniciada");
});
