const inputs = document.querySelectorAll(".input");


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
function myFunction() {
	var x = document.getElementById("password");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
  }


// document.getElementById('loginForm').addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	let username = document.getElementById('username').value;
// 	let password = document.getElementById('password').value;

// 	$.ajax({
// 		url: 'api/login.php',
// 		type: 'POST',
// 		datatype: 'JSON',
// 		data: {
// 			username: username,
// 			password: password
// 		},
// 		success: (data) => {
// 			console.log(data)
// 		}
// 	})
// })