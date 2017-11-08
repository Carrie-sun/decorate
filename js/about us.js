$(function() {
	$(".mb li").hover(function() {
		$(this).children("p").css("left", 0)
		$(this).children("p").addClass("animated fadeInLeft")

		$(this).children("div").css("opacity", .7)
	}, function() {
		$(this).children("p").css("left", 150)
		$(this).children("p").removeClass("animated fadeInLeft")

		$(this).children("div").css("opacity", 0)
	})
	$(".imgs1 li").hover(function() {
		$(this).addClass("animated shake")
	}, function() {
		$(this).removeClass("animated shake")
	})
	$(".imgs2 li").hover(function() {
		$(this).children("p").addClass("hvr-float-shadow")
	}, function() {
		$(this).children("p").removeClass("hvr-float-shadow")
	})
	$(".imgs3 li").hover(function() {
		$(this).addClass("animated tada")
	}, function() {
		$(this).removeClass("animated tada")
	})
	$(".imgs4 li:lt(5)").hover(function() {
		$(this).children("img").addClass("animated flipOutY")
		$(this).children("p").addClass("animated slideOutUp")
	}, function() {
		$(this).children("img").removeClass("animated flipOutY")
		$(this).children("p").removeClass("animated slideOutUp")
	})
	$(".imgs4 li:gt(4)").hover(function() {
		$(this).addClass("hvr-float-shadow")
	}, function() {
		$(this).removeClass("hvr-float-shadow")
	})

	var dataImg5 = [{
			"src": "../image/5_03.jpg",
			"title": "施工保护"
		},
		{
			"src": "../image/5_04.jpg",
			"title": "工地形象"
		},
		{
			"src": "../image/5_05.jpg",
			"title": "电工施工"
		},
		{
			"src": "../image/5_06.jpg",
			"title": "水电施工"
		},
		{
			"src": "../image/5_09.jpg",
			"title": "泥土施工"
		},
		{
			"src": "../image/5_10.jpg",
			"title": "木工施工"
		},
		{
			"src": "../image/5_11.jpg",
			"title": "煽灰施工"
		},
		{
			"src": "../image/5_12.jpg",
			"title": "漆工施工"
		},
	]
	var imgs5 = document.getElementsByClassName("imgs5")[0]
	for(var i = 0; i < dataImg5.length; i++) {
		imgs5.innerHTML += "<li><img src='" + dataImg5[i].src + "'><p>" + dataImg5[i].title + "</p></li>"
	}
	var dataImg6 = [{
			"src": "../image/6_03.jpg",
			"title": "① 客户咨询 预约量房"
		},
		{
			"src": "../image/6_05.jpg",
			"title": "② 签意向协议"
		},
		{
			"src": "../image/6_07.jpg",
			"title": "③ 上门测量"
		},
		{
			"src": "../image/6_09.jpg",
			"title": "④ 初步方案及报价参考"
		},
		{
			"src": "../image/6_15.jpg",
			"title": "⑧ 材料选购"
		},
		{
			"src": "../image/6_16.jpg",
			"title": "⑦ 签订施工合同"
		},
		{
			"src": "../image/6_17.jpg",
			"title": "⑥ 完整方案与深化设计"
		},
		{
			"src": "../image/6_18.jpg",
			"title": "⑤ 签订设计合同"
		},
		{
			"src": "../image/6_23.jpg",
			"title": "⑨ 进场施工"
		},

	]
	var imgs6 = document.getElementsByClassName("imgs6")[0]
	for(var i = 0; i < dataImg6.length; i++) {
		imgs6.innerHTML += "<li><img src='" + dataImg6[i].src + "'><p>" + dataImg6[i].title + "</p></li>"
	}
	$(".imgs6 li").hover(function() {
		$(this).children("p").addClass("animated swing")
	}, function() {
		$(this).children("p").removeClass("animated swing")
	})
	$(".imgs6 li:lt(3)").hover(function() {
		$(this).addClass("hvr-bubble-right")
	}, function() {
		$(this).removeClass("hvr-bubble-right")
	})
	$(".imgs6 li:nth-of-type(4),.imgs6 li:nth-of-type(5)").hover(function() {
		$(this).addClass("hvr-bubble-bottom")
	}, function() {
		$(this).removeClass("hvr-bubble-bottom")
	})
	$(".imgs6 li:gt(5)").hover(function() {
		$(this).addClass("hvr-bubble-left")
	}, function() {
		$(this).removeClass("hvr-bubble-left")
	})
	$(".imgs6 li:nth-of-type(6)").hover(function() {
		$(this).addClass("hvr-bubble-left")
	}, function() {
		$(this).removeClass("hvr-bubble-left")
	})
	$(".imgs6 li:nth-of-type(9)").hover(function() {

		$(this).removeClass("hvr-bubble-left")
	})
	$(".imgs5 li").hover(function() {
		$(this).children("img").addClass("hvr-glow")
		$(this).children("p").addClass("animated shake")
	}, function() {
		$(this).children("img").removeClass("hvr-glow")
		$(this).children("p").removeClass("animated shake")
	})
	document.onscroll = function() {
		var scrollTop = document.getElementsByClassName("scrollTop")[0]
		var scrollH = document.body.scrollTop || document.documentElement.scrollTop
		console.log(scrollH)
		if(scrollH > 600) {
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
