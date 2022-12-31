const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	CheckEmail() ;
	checkInputs();
	CheckPwd() ;
	CheckPwd2();
});
       function CheckEmail() 
	   {  
		const emailValue = email.value.trim();
		if(emailValue === '') {
			setErrorFor(email, 'Email cannot be blank');
		} else if (!isEmail(emailValue)) {
			setErrorFor(email, 'Not a valid email');
		} else {
			setSuccessFor(email);
		}
	   } 

	   function CheckPwd() 
	   { 
		const passwordValue = password.value.trim();
		if(passwordValue === '') {
			setErrorFor(password, 'Password cannot be blank');
		}  
	     else if (!isPWS(passwordValue))
		 {
              setErrorFor(password,'Not a valid Password')
		 }	
 		else {
			setSuccessFor(password);
		}
	   } 

	   function CheckPwd2()
	   {
		const passwordValue = password.value.trim();
		const password2Value = password2.value.trim();
		if(password2Value === '') { 
			setErrorFor(password2, 'Password2 cannot be blank');
		} else if(passwordValue !== password2Value) {
			setErrorFor(password2, 'Passwords does not match');
		} 
		else if (!isPWS(password2Value))
		{
		  setErrorFor();
		} 
		else{
			setSuccessFor(password2);
		}
	   }  

	    function CheckUsr()
	{ const usernameValue = username.value.trim();
		if( usernameValue.lenght() < 5) {
			setErrorFor(username, 'Username cannot be blank');
		} else {
			setSuccessFor(username);
		}

	}
    
function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

 function isPWS(password) 
 {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
 }








