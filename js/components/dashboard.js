'use strict';

const Dashboard = () =>{
	const dashboard = $('<div class="dashboard">Dashboard Components</div>');

	if (state.user) {
		const name = $('<h1>'+state.user.name+"</h1>");
		const email = $('<p>'+state.user.email+"</p>");

		dashboard.append(name);
		dashboard.append(email);

		const logout = $('<button>Salir</button>');
		logout.on('click' , _ =>{
			FB.logout(response =>{
				state.user = null;
				state.doRender();
			});
		});
		dashboard.append(logout);
	}
	return dashboard;
}