'use strict';
import * as app from './appState.js';

const user = app.getItem('user');

// redirect 
if(!user){
	window.location.href = "/login";
}

const logOut = document.getElementById('log-out');

logOut.onclick = () => {
	app.removeItem('user');
	window.location.href = "/login";
}
