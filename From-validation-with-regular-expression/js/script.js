'use strict';

(()=> 
{

	// select input field
	const formElm = document.querySelector('form');
	const fNameElm = document.querySelector('#fName');
	const lNameElm = document.querySelector('#lName');
	const emailElm = document.querySelector('#email');
	const phoneElm = document.querySelector('#phone');
	const passwordElm = document.querySelector('#password');
	const confirmPasswordElm = document.querySelector('#ConfirmPassword');
	const checkElm = document.querySelector('#check');

	//name error message 
	const errorMessage1Elm = document.querySelector('.errorMessage1');
	const errorMessage2Elm = document.querySelector('.errorMessage2');
	const emailErrorElm = document.querySelector('.emailError');
	const phoneNumErrorMessElm = document.querySelector('.phoneNumErrorMess');
	const passwordErrorMesElm = document.querySelector('.passwordErrorMes');
	const confirmPasswordErroElm = document.querySelector('.confirmPasswordErro');


	// JavaScript form validation start here
	formElm.addEventListener('submit',(evt) => 
	{
		evt.preventDefault()

		// Form validation 
		const [fName,lName,emailValidate,myPhone,strongPassword,passwordConfirm] = formValidation();
		if(fName && lName && emailValidate && myPhone && strongPassword && passwordConfirm)
		{
			alert('You have succesfully created social network account');

			console.log(fName);
			console.log(lName);
			console.log(emailValidate);
			console.log(myPhone);
			console.log(strongPassword);
			console.log(passwordConfirm);
		}
		
		// reset form 
		resetInput();
	});


	// extra design start here
	fNameElm.addEventListener('keypress',(evt) => 
	{
		fNameElm.style.border = '1px solid #757575';
		errorMessage1Elm.style.marginLeft = '12px';
		errorMessage1Elm.style.color = '';
		errorMessage1Elm.textContent = '';
	});
	lNameElm.addEventListener('keypress',(evt) => 
	{
		lNameElm.style.border = '1px solid #757575';
		errorMessage2Elm.style.marginLeft = '12px';
		errorMessage2Elm.style.color = '';
		errorMessage2Elm.textContent = '';
	})
	emailElm.addEventListener('keypress',(evt) => 
	{
		emailElm.style.border = '1px solid #757575';
		emailErrorElm.style.marginLeft = '12px';
		emailErrorElm.style.color = '';
		emailErrorElm.textContent = '';
	})
	phoneElm.addEventListener('keypress',(evt) => 
	{
		phoneElm.style.border = '1px solid #757575';
		phoneNumErrorMessElm.style.marginLeft = '12px';
		phoneNumErrorMessElm.style.color = '';
		phoneNumErrorMessElm.textContent = '';
	})
	passwordElm.addEventListener('keypress',(evt) => 
	{
		passwordElm.style.border = '1px solid #757575';
		passwordErrorMesElm.style.marginLeft = '12px';
		passwordErrorMesElm.style.color = '';
		passwordErrorMesElm.textContent = '';
	})
	confirmPasswordElm.addEventListener('keypress',(evt) => 
	{
		confirmPasswordElm.style.border = '1px solid #757575';
		confirmPasswordErroElm.style.marginLeft = '12px';
		confirmPasswordErroElm.style.color = '';
		confirmPasswordErroElm.textContent = '';
	});



	// function calling start here
	// reset input 
	function resetInput()
	{

		fNameElm.value  = '';
		lNameElm.value  = '';
		emailElm.value  = '';
		phoneElm.value = '';
		passwordElm.value = '';
		confirmPasswordElm.value = '';
	}
	// Form validation 
	function formValidation()
	{

		// isvalidate function
		let isValidate = false;

		let firstName = fNameElm.value ;
		let lastName = lNameElm.value ;
		let email = emailElm.value ;
		let phone = phoneElm.value;
		let passwords = passwordElm.value;
		// ---------------- i need to work fomr here 
		let confirmPassword = confirmPasswordElm.value
		// name
		let fName = firstName.match(/\w{1,10}/gi);
		let lName = lastName.match(/\w{1,10}/gi);
		// email
		let emailValidate = email.match(/\w{2,20}@\w{2,20}\.\w{2,10}/gi);
		// phone
		let myPhone = phone.match(/^\+?(88)?01[5-9|3]\d{2}-?\d{3}-?\d{3}$/gi);
		//password
		let strongPassword = passwords.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*())+=]).{10,20}/gi);//(?=.*[.!@#$%^&*())+=])
		let passwordConfirm = confirmPassword.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*())+=]).{10,20}/gi);//(?=.*[.!@#$%^&*())+=])

	// ----------------I need to work form here-----------------------------------------------------

	// ---------------------------------------------------------------------


		// name start here 
		if(!fName)
		{
			fNameElm.style.border = '1px solid red';
			errorMessage1Elm.style.marginLeft = '12px';
			errorMessage1Elm.style.color = 'red';
			errorMessage1Elm.textContent = 'Please fill up the fname input';
			
		}else if(firstName.length < 5)
		{
			fNameElm.style.border = '1px solid red';
			errorMessage1Elm.style.marginLeft = '12px';
			errorMessage1Elm.style.color = 'red';
			errorMessage1Elm.textContent = 'min length should be 5 char';
			
		}else if(firstName.length > 10)
		{
			fNameElm.style.border = '1px solid red';
			errorMessage1Elm.style.marginLeft = '12px';
			errorMessage1Elm.style.color = 'red';
			errorMessage1Elm.textContent = 'max length should be 10 char';
			
		}
			else 
		{
			fNameElm.style.border = '1px solid #757575';
			errorMessage1Elm.style.marginLeft = '12px';
			errorMessage1Elm.style.color = '';
			errorMessage1Elm.textContent = '';
		
		}

		// last name validation start here 
		if(!lName)
		{
			lNameElm.style.border = '1px solid red';
			errorMessage2Elm.style.marginLeft = '12px';
			errorMessage2Elm.style.color = 'red';
			errorMessage2Elm.textContent = 'Please fill up the lname input';
			
		}else if(lastName.length < 5)
		{
			lNameElm.style.border = '1px solid red';
			errorMessage2Elm.style.marginLeft = '12px';
			errorMessage2Elm.style.color = 'red';
			errorMessage2Elm.textContent = 'min length should be 5 char';
			
		}else if(lastName.length > 10)
		{
			lNameElm.style.border = '1px solid red';
			errorMessage2Elm.style.marginLeft = '12px';
			errorMessage2Elm.style.color = 'red';
			errorMessage2Elm.textContent = 'max length should be 10 char';
			
		}
			else
		{
			lNameElm.style.border = '1px solid #757575';
			errorMessage2Elm.style.marginLeft = '12px';
			errorMessage2Elm.style.color = '';
			errorMessage2Elm.textContent = '';
			
		}
		// email start here 
		if(!email.match(/\w{2,20}@/gi))
		{
			emailElm.style.border = '1px solid red';
			emailErrorElm.style.marginLeft = '12px';
			emailErrorElm.style.color = 'red';
			emailErrorElm.textContent = 'You need to pass @';
			
		}else if(!email.match(/\w{2,20}@\w{2,20}/gi))
		{
			emailElm.style.border = '1px solid red';
			emailErrorElm.style.marginLeft = '12px';
			emailErrorElm.style.color = 'red';
			emailErrorElm.textContent = 'Your should pass text';
			
		}else if(!email.match(/\w{2,20}@\w{2,20}\./gi))
		{
			emailElm.style.border = '1px solid red';
			emailErrorElm.style.marginLeft = '12px';
			emailErrorElm.style.color = 'red';
			emailErrorElm.textContent = 'Your have to pass .';
			
		}else if(!emailValidate)
		{
			emailElm.style.border = '1px solid red';
			emailErrorElm.style.marginLeft = '12px';
			emailErrorElm.style.color = 'red';
			emailErrorElm.textContent = 'Email address is required';
			
		}else if(email.match(/\w{2,20}@/gi))
		{
			emailElm.style.border = '1px solid #757575';
			emailErrorElm.style.marginLeft = '12px';
			emailErrorElm.style.color = '';
			emailErrorElm.textContent = '';
			
		}else if(email.match(/\w{2,20}@\w{2,20}/gi))
		{
			emailElm.style.border = '1px solid #757575';
			emailErrorElm.style.marginLeft = '12px';
			emailErrorElm.style.color = '';
			emailErrorElm.textContent = '';
		}else if(!email.match(/\w{2,20}@\w{2,20}\./gi))
		{
			emailElm.style.border = '1px solid #757575';
			emailErrorElm.style.marginLeft = '12px';
			emailErrorElm.style.color = '';
			emailErrorElm.textContent = '';
		}else if(emailValidate){
			emailElm.style.border = '1px solid #757575';
			emailErrorElm.style.marginLeft = '12px';
			emailErrorElm.style.color = '';
			emailErrorElm.textContent = '';
		}
		// phone start here 
		if(!myPhone)
		{
			phoneElm.style.border = '1px solid red';
			phoneNumErrorMessElm.style.marginLeft = '12px';
			phoneNumErrorMessElm.style.color = 'red';
			phoneNumErrorMessElm.textContent = 'Phone number is empty';
			
		}else if(phoneElm.length > 11)
		{
			phoneElm.style.border = '1px solid red';
			phoneNumErrorMessElm.style.marginLeft = '12px';
			phoneNumErrorMessElm.style.color = 'red';
			phoneNumErrorMessElm.textContent = 'Phone number is incurrent';
			
		}else if(myPhone)
		{
			phoneElm.style.border = '1px solid #757575';
			phoneNumErrorMessElm.style.marginLeft = '12px';
			phoneNumErrorMessElm.style.color = '';
			phoneNumErrorMessElm.textContent = '';
			
		}

		// password start here
		if(!strongPassword)
		{
			passwordElm.style.border = '1px solid red';
			passwordErrorMesElm.style.marginLeft = '12px';
			passwordErrorMesElm.style.color = 'red';
			passwordErrorMesElm.textContent = 'Please give a strong password';
			
		}else{
			passwordElm.style.border = '1px solid #757575';
			passwordErrorMesElm.style.marginLeft = '12px';
			passwordErrorMesElm.style.color = 'red';
			passwordErrorMesElm.textContent = '';
			
		}
		// confirm password start here 
		if(!confirmPassword)
		{
			confirmPasswordElm.style.border = '1px solid red';
			confirmPasswordErroElm.style.marginLeft = '12px';
			confirmPasswordErroElm.style.color = 'red';
			confirmPasswordErroElm.textContent = 'Your input field is empty';
		}else if(passwords === confirmPassword)
		{
			confirmPasswordElm.style.border = '1px solid green';
			confirmPasswordErroElm.style.marginLeft = '12px';
			confirmPasswordErroElm.style.color = '';
			confirmPasswordErroElm.textContent = '';
		}else{
			confirmPasswordElm.style.border = '1px solid red';
			confirmPasswordErroElm.style.marginLeft = '12px';
			confirmPasswordErroElm.style.color = 'red';
			confirmPasswordErroElm.textContent = 'password is not match';
		}

		return [fName,lName,emailValidate,myPhone,strongPassword,passwordConfirm]
	}

})();




