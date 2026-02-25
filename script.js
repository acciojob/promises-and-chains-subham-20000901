//your JS code here. If required.
let ageInput = document.getElementById("age");
let nameInput = document.getElementById("name");
let button = document.getElementById("btn");

 button.addEventListener('click', function(event) {

	 event.preventDefault();
	 
	 const ageValue = ageInput.value;
	 const name = nameInput.value;

	 if( ageValue === "" || name === "") {
		 alert("Please enter valid details");
		 return;
	 }
	 const age = Number(ageValue);

	 const promiseResolution = new Promise((resolve,reject) => {
	
		if(age>18) {
			
			setTimeout(() => {
				
				resolve(`Welcome, ${name}. You can vote.`);
				
			},4000);
		}
		else{
			
			setTimeout(() => {
				reject(`Oh sorry ${name}. You aren't old enough.`);
			},4000);
		}
	});

   
	 promiseResolution
		 .then(result => {
		   alert(result);
	 })
	   .catch(error => {
		   alert(error);
	   });
		 
 });



