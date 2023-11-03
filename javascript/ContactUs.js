var error;
var username, email, male, female, address, letter;

function check_alnum(name){
	for(let i=0; i < name.length;i++){
		if(!((name.charAt(i) >= '0' && name.charAt(i) <= '9') || (name.charAt(i) >= 'a' && name.charAt(i) <= 'z') || (name.charAt(i) >= 'A' && name.charAt(i) <= 'Z'))){
			return false;
		}
	}
	return true;
}

function validate_username(){
	username = document.getElementById('FullName').value;
	if(username.length < 1){
		err.innerHTML = "username must not be empty";
		return false;
	}

	if(check_alnum(username) == false){
		err.innerHTML = "username must only contain alphabet and numeric character";
		return false;
	}
	return true;
}

function checkEmail(){
	email = document.getElementById('Email').value;

	if(email.length < 1){
		err.innerHTML = "email must not be empty";
		return false;
	}

	if(email.endsWith('.com') == false){
		err.innerHTML = "email must end with '.com'";
		return false;
	}

	if(email.includes('@') == false){
		err.innerHTML = "email must contain '@'";
		return false;
	}

	return true;
}


function on_submit(){
	err = document.getElementById('error');
	err.innerHTML = "";
	if(validate_username() == false){
		return;
	}
	
	if(checkEmail() == false){
		return;
	}
	

	
}