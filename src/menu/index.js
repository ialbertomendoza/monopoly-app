var yo = require("yo-yo");

var menu = yo`<nav class="blue-grey darken-4">
            <div class="nav-wrapper" id="main-menu">
                <a href="#!" data-activates="mobile-demo" class="button-collapse">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">

                </ul>
                <ul class="side-nav fixed" id="mobile-demo">
                    <li id="menu-lateral-logo"><i class="fa fa-home" aria-hidden="true"></i></li>
                    <li id="menu-lateral-juego-actual" onclick=${onclick} class="selected"><a href="#!"><i class="fa fa-gamepad" aria-hidden="true"></i> Juego actual</a></li>
                    <li id="menu-lateral-banco" onclick=${onclick}><a href="#!"><i class="fa fa-university" aria-hidden="true"></i> Banco</a></li>
                    <li id="menu-lateral-mis-juegos" onclick=${onclick}><a href="#!"><i class="fa fa-area-chart" aria-hidden="true"></i> Historial de juegos</a></li>
                    <li id="menu-lateral-mi-perfil" onclick=${onclick}><a href="#!"><i class="fa fa-user" aria-hidden="true"></i> Mi perfil</a></li>
                    <li id="menu-lateral-ayuda" onclick=${onclick}><a href="#!"><i class="fa fa-question-circle" aria-hidden="true"></i> Ayuda</a></li>
                    <li id="menu-lateral-salir"><a href="/"><i class="fa fa-sign-out" aria-hidden="true"></i> Salir</a></li>
                </ul>
            </div>
        </nav>`;

function toggleButtons(seccion){
	document.getElementById('menu-lateral-juego-actual').className = "";
    document.getElementById('menu-lateral-banco').className = "";
	document.getElementById('menu-lateral-mis-juegos').className = "";
	document.getElementById('menu-lateral-mi-perfil').className = "";
	document.getElementById('menu-lateral-ayuda').className = "";
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