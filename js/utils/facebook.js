  window.fbAsyncInit = function() {
    FB.init({
      appId      : '264756557333146',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();   
  };

function loginHandler(response){
	if (response.status == 'connected') {
		state.status = "conectado";
		FB.api('/me?fields=email,name', user => {
			state.user = user;
			state.doRender();
		});
	}else if (response.status === 'not_authorized'){
		state.user = null;
		state.status = "Aplicación no  autorizada";
		state.doRender();
	}
}

function doLogin() {
 	FB.login(loginHandler, {scope: 'email'});
};