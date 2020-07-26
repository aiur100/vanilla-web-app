/**
 * Requires that an element with the ID 
 * alert-spot be on the dom. 
 * 
 * @param string message 
 * @param string type 
 * @param boolean dismissable 
 */
export function showAlert(message,type="primary",dismissable=true){
	const alertSpot = document.getElementById('alert-spot');
	const alertBox = document.createElement('div');
	alertBox.setAttribute('role','alert');
	alertBox.classList.add(`alert`);
	alertBox.classList.add(`alert-${type}`);
	alertBox.innerHTML = message+"\n";
	if(dismissable){
		alertBox.classList.add('alert-dismissable');
		alertBox.classList.add('fade');
		alertBox.classList.add('show');
		alertBox.classList.add('mt-2');
		alertBox.classList.add('mb-2');
		alertBox.innerHTML += `<button type="button" class="close float-right" data-dismiss="alert" aria-label="Close">
		<span aria-hidden="true">&times;</span>
	  </button>`;
	}
	alertSpot.appendChild(alertBox);
}

const prevTextKey = 'prev-text';

export function makeButtonLoading(buttonElement){
	const prevText = buttonElement.innerHTML;
	buttonElement.setAttribute(prevTextKey,prevText);
	buttonElement.innerHTML = `<div class="spinner-border text-light"  role="status">
				<span class="sr-only">Loading...</span>
			</div>`;
	buttonElement.disabled = true;
}

export function stopButtonLoading(buttonElement){
	const prevText = buttonElement.getAttribute(prevTextKey);
	buttonElement.disabled = false;
	buttonElement.innerHTML = prevText;
}