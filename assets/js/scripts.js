//window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	var navBar=document.getElementById("navbar");
	var topDist=navBar.getBoundingClientRect().top;
	if($(navBar).offset().top>224){
		document.getElementById("navbar").style = "padding-bottom:30px";
		document.getElementById("logo").style.fontSize = "25px";
	}else{
		document.getElementById("navbar").style = "padding-bottom:80px";
		document.getElementById("logo").style.fontSize = "35px";
	}
}
