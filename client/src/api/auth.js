import axios from 'axios';
axios.defaults.withCredentials = true;
const url = 'http://localhost:8000/api/';

export async function onRegistration(registrationData) {
	console.log(`We're in here!`);
	return await axios.post(`${url}register`, registrationData);
}

export async function onLogin(loginData) {
	return await axios.post(`${url}login`, loginData);
}

export async function onLogout() {
	return await axios.get(`${url}logout`);
}

export async function fetchProtectedInfo() {
	return await axios.get(`${url}protected`);
}
