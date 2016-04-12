	
// Navbar
	
	$('span.navbar-button').click (function () {

	$('ul.navbar').slideToggle();
})

	$(window).resize(function () {

		if ( $(window).width() > 800) {

			$('ul.navbar').removeAttr('style');
	}
	
})



//Popup Contact

// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Please Fill In All Fields");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully.");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('popupform').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('popupform').style.display = "none";
}

