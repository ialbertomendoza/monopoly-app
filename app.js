var express = require("express");
var app = express();

/* Motor de vistas y recursos estáticos */
app.set('view engine', 'pug');
app.use(express.static('public'));

/* Inicio Rutas */

app.get('/', function(req, res){
	res.redirect("home");
});

app.get('/home', function(req, res){
	res.render("index");
});

/* Fin Rutas */

app.listen(8000, function(error){
	if (error) return console.log("Error"), process.exit(1);
	console.log("Monopoly Bank Started");
});
