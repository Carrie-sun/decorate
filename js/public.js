window.onload = function() {
	var bgColor = document.getElementsByClassName('h-bottom')[0]
	var oulii = bgColor.getElementsByTagName("ul")[0]
	var licolor = oulii.getElementsByTagName('li')
	for(var i = 0; i < licolor.length; i++) {
		licolor[i].index = i;
		licolor[i].onclick = function() {
			console.log(this.index)
			for(var i = 0; i < licolor.length; i++) {
				licolor[i].className = ""
			}
			licolor[this.index].className = "bgcolor"
		}
	}

}
$(function() {
	$(".h-bottom ul li:nth-of-type(2)").click(function() {
		$(".bighz").css("display", "block")
	})
	
	$(".scrollTop").click(function() {
		var sc = $(window).scrollTop();
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	})
})
document.onreadystatechange = function() {
	var bighz = document.getElementsByClassName("bighz")[0];
	var bighzh = bighz.getElementsByTagName("h3")[0]
	if(document.readyState === "complete") {
		bighz.style.display = "block"
	} else {
		bighz.style.display = "none"
	}
	bighzh.onclick = function() {
		bighz.style.display = "none"
	}
}