var yo = require("yo-yo");

module.exports = yo`<div class="row">
		<div class="col l8 m12 s12">
			<div class="row">
				<div class="col s12 m12 l12">
		          <div class="card">
		            <div class="card-content white-text">
		              <span class="card-title">Mendoza</span>
		              <h3>$ 250,000.00</h3>
		            </div>
		            <div class="card-action">
		              <a href="#"><i class="fa fa-book" aria-hidden="true"></i> Mis propiedades</a>
		              <a href="#"><i class="fa fa-line-chart" aria-hidden="true"></i> Gastos</a>
		              <a href="#" class="hide-on-med-and-down"><i class="fa fa-money" aria-hidden="true"></i> Pagar</a>
		            </div>
		          </div>
		        </div>
			</div>
	        <div class="row">
				<div class="col s12 m4 l4">
		          <div class="card teal white-text">
		            <div class="card-content white-text">
		              <span class="card-title">Ingresos</span>
		              <h3></h3>
		            </div>
		            <div class="card-action">
		            	<a href="#"><i class="fa fa-money" aria-hidden="true"></i> Pagar</a>
		            </div>
		          </div>
		        </div>
		        <div class="col s12 m4 l4">
		          <div class="card red">
		            <div class="card-content white-text">
		              <span class="card-title">Egresos</span>
		              <h3></h3>
		            </div>
		            <div class="card-action">
		            	<a href="#"><i class="fa fa-money" aria-hidden="true"></i> Pagar</a>
		            </div>
		          </div>
		        </div>
	        </div>
		</div>
        <div class="col l4 m12 s12">
        	<div class="col l12 m12 s12">
	          <ul class="collapsible" data-collapsible="accordion">
	          	<li class="collapsible-header"><h5>Tabla de posiciones</h5></li>
			    <li>
			      <div class="collapsible-header"><i class="fa fa-trophy" aria-hidden="true"></i> Jugador 1</div>
			      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
			    </li>
			    <li>
			      <div class="collapsible-header"><i class="fa fa-user" aria-hidden="true"></i> Jugador 2</div>
			      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
			    </li>
			    <li>
			      <div class="collapsible-header"><i class="fa fa-user" aria-hidden="true"></i> Jugador 3</div>
			      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
			    </li>
			  </ul>
	        </div>
        </div>
      </div>`;

