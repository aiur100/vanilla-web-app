'use strict';
import * as app from './appState.js';
import * as ui from './ui.js';

const login = document.getElementById('login-button');
const email = document.getElementById('email');
const pass = document.getElementById('password');

login.onclick = (event) => {
	try{
		event.preventDefault();
		ui.makeButtonLoading(login);
		app.setItem('user',{ email: email.value });
		window.location.href = "/";
	}
	catch(error){
		ui.showAlert(error,'danger',true);
		console.error(error);
		ui.stopButtonLoading(login);
	}
}