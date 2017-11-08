$(function() {
	$('.b2,.b3').hover(function() {
		$(this).addClass("hvr-float-shadow")
	}, function() {
		$(this).removeClass("hvr-float-shadow")
	})
	
	document.onscroll = function() {
		var scrollTop = document.getElementsByClassName("scrollTop")[0]
		var scrollH = document.body.scrollTop || document.documentElement.scrollTop
		if(scrollH > 500) {
			scrollTop.style.display = "block"
		} else {
			scrollTop.style.display = "none"
		}
	}
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
window.onload=function(){
		var bighz=document.getElementsByClassName("bighz")[0]
	var hezi2=document.getElementsByClassName("hezi2")[0]
	var hezi3=document.getElementsByClassName("hezi3")[0]
	var hezi2btn=hezi2.getElementsByTagName("button")[0]
	var hezi3btn=hezi3.getElementsByTagName("span")[0]
	var hezi2ipt=hezi2.getElementsByTagName("input")[1]
	var hezi3ipt=hezi3.getElementsByTagName("input")[0]
	var re=/^1[3|4|5|8][0-9]\d{4,8}$/;
	hezi2btn.onclick=function(){
		if(re.test(hezi2ipt.value)!=true){
			alert("请输入正确的手机号")
		}else{
			alert("我们会在第一时间联系您")
			bighz.style.display="none"
		}
	}
	hezi3btn.onclick=function(){
		if(re.test(hezi3ipt.value)!=true){
			alert("请输入正确的手机号")
		}else{
			alert("我们会在第一时间联系您")
			bighz.style.display="none"
		}
	}
}
