/* 
Create Back to top button (learned from W3school)
url: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
*/
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	//Get the button
	var mybutton = document.getElementById("myBtn");
	console.log("my button is "+ mybutton);
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

