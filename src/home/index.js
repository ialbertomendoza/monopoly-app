var page = require("page");
var title = require("title");
var template = require("./template");
var menu = require("../menu");
var empty = require("empty-element");

page("/home", menu, function(context, next){
	title("Home");
	var main = document.getElementById("contenedor-principal");
	main.appendChild(template);
});