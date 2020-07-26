const storeKey = "xxx";

export function setItem(key,value){
	let state = getState();
	if(state && state[key])
		state[key] = value;
	else
		state = { [key] : value };
	setState( state );
}

export function removeItem(key){
	let state = getState();
	delete state[key];
	setState(state);
}

export function getItem(key){
	return getState()?.[key];
}

export function getState(){
	return JSON.parse(localStorage.getItem(storeKey));
}

export function setState(state){
	localStorage.setItem(storeKey,JSON.stringify(state));
}