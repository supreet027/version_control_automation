const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

const button1 = document.getElementById('button1');
        const button2 = document.getElementById('button2');

        button1.addEventListener('click', () => {
            document.getElementById('detail-form').submit();
        });

        button2.addEventListener('click', () => {
            document.getElementById('report-form').submit();
        });


document.addEventListener('DOMContentLoaded', function() {
	const loginForm = document.getElementById('loginForm');
	loginForm.addEventListener('submit', function(event) {
		const username = loginForm.username.value;
		const password = loginForm.password.value;

		if (!username || !password) {
			event.preventDefault();
			alert('Please enter both username and password');
		}
	});
});