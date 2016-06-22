var yo = require("yo-yo");

var menu = yo`<nav class="blue-grey darken-4">
            <div class="nav-wrapper fixed" id="main-menu">
                <a href="#!" data-activates="mobile-demo" class="button-collapse">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
                <ul id="nav-mobile fixed" class="right hide-on-med-and-down">
                    <li id="menu-superior-juego-actual" onclick=${onclick} class="selected"><a href="#!"><i class="fa fa-gamepad" aria-hidden="true"></i> Juego actual</a></li>
                    <li id="menu-superior-banco" onclick=${onclick}><a href="#!"><i class="fa fa-university" aria-hidden="true"></i> Banco</a></li>
                    <li id="menu-superior-mis-juegos" onclick=${onclick}><a href="#!"><i class="fa fa-area-chart" aria-hidden="true"></i> Historial de juegos</a></li>
                    <li id="menu-superior-mi-perfil" onclick=${onclick}><a href="#!"><i class="fa fa-user" aria-hidden="true"></i> Mi perfil</a></li>
                    <li id="menu-superior-ayuda" onclick=${onclick}><a href="#!"><i class="fa fa-question-circle" aria-hidden="true"></i> Ayuda</a></li>
                    <li id="menu-superior-salir" onclick=${onclick}><a href="#!"><i class="fa fa-sign-out" aria-hidden="true"></i> Salir</a></li>
                </ul>
                <ul class="side-nav" id="mobile-demo">
                    <li onclick=""><a href="#!"><i class="fa fa-gamepad" aria-hidden="true"></i> Juego actual</a></li>
                    <li onclick=""><a href="#!"><i class="fa fa-university" aria-hidden="true"></i> Banco</a></li>
                    <li onclick=""><a href="#!"><i class="fa fa-area-chart" aria-hidden="true"></i> Historial de juegos</a></li>
                    <li onclick=""><a href="#!"><i class="fa fa-user" aria-hidden="true"></i> Mi perfil</a></li>
                    <li onclick=""><a href="#!"><i class="fa fa-question-circle" aria-hidden="true"></i> Ayuda</a></li>
                    <li onclick=""><a href="#!"><i class="fa fa-sign-out" aria-hidden="true"></i> Salir</a></li>
                </ul>
            </div>
        </nav>`;

function toggleButtons(seccion){
	document.getElementById('menu-superior-juego-actual').className = "";
    document.getElementById('menu-superior-banco').className = "";
	document.getElementById('menu-superior-mis-juegos').className = "";
	document.getElementById('menu-superior-mi-perfil').className = "";
	document.getElementById('menu-superior-ayuda').className = "";
	seccion.className = "selected";
}

function onclick(){
	toggleButtons(this);
}

module.exports = function menuTemplate(context, next){
	var main = document.getElementById('contenedor-menu');
	main.appendChild(menu);
	next();
}