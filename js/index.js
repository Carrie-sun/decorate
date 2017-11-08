window.onload = function() {
	var banner = document.getElementById('banner')
	var oUl = banner.getElementsByTagName('ul')[0]
	var show = document.getElementsByClassName("show1")
	var more1 = document.getElementsByClassName("more1")
	var span = document.getElementsByClassName('span')
	var oOl = banner.getElementsByTagName('ol')[0]
	var oLiimgs = oUl.getElementsByTagName('li')
	var oLis = oOl.getElementsByTagName('li')
	var hide = document.getElementsByClassName('hide1')
	var timer2 = null;
	var num = 0;
	moves()

	function moves() {
		timer2 = setInterval(function() {
			num++;
			if(num == oLis.length) {
				num = 0
			}
			for(var i = 0; i < oLis.length; i++) {
				oLis[i].style.backgroundColor = ""
				oLiimgs[i].style.display = "none";
			}
			oLiimgs[num].style.display = "block";
			oLis[num].style.backgroundColor = "rgba(255,0,0,.8)"
		}, 3000)
	}
	banner.onmouseover = function() {
		clearInterval(timer2)
	}
	banner.onmouseout = function() {
		moves()
	}
	for(var i = 0; i < oLis.length; i++) {
		oLis[i].index = i;
		oLis[i].onmouseover = function() {
			num++;
			if(num == oLis.length) {
				num = 0
			}
			for(var i = 0; i < oLis.length; i++) {
				oLis[i].style.backgroundColor = ""
				oLiimgs[i].style.display = "none"
			}
			oLiimgs[this.index].style.display = "block"
			this.style.backgroundColor = "rgba(255,0,0,.8)"
			num = this.index;
		}
		oLis[i].onmouseout = function() {
			this.style.backgroundColor = "rgba(255,0,0,.8)"
		}

	}
	for(var i = 0; i < more1.length; i++) {
		more1[i].index = i
		more1[i].onmouseover = function() {
			hide[this.index].style.display = "block"
			span[this.index].style.opacity = "0"
		}

		more1[i].onmouseout = function() {
			hide[this.index].style.display = "none"
			span[this.index].style.opacity = "1"
		}
		hide[i].onmouseover = function() {
			this.style.display = "block"
		}
		hide[i].onmouseout = function() {
			this.style.display = "none"
		}
	}
	var boxbig = document.getElementsByClassName('boxbig')[0]
	var boxsmall = document.getElementsByClassName('boxsmall')[0]
	var lis = boxbig.getElementsByTagName('li')
	var imgs = boxbig.getElementsByTagName('img')
	var p = boxbig.getElementsByTagName('p')
	var h3 = boxbig.getElementsByTagName('h3')
	var ols = boxsmall.getElementsByTagName('ol')
	var liimg = boxsmall.getElementsByTagName('li')
	var p2 = boxsmall.getElementsByTagName('p')

	lis[0].style.backgroundColor = "#db2f43"
	p[0].style.color = "white"
	h3[0].style.color = "white"
	imgs[1].style.display = "block"

	for(var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onmouseover = function() {
			imgs[1].style.display = "none"
			for(var j = 0; j < ols.length; j++) {
				ols[j].style.display = "none"
				lis[j].style.backgroundColor = ""
				p[j].style.color = "#9a9f9f"
				h3[j].style.color = "#db2f43"
			}
			ols[this.index].style.display = "block"
			p[this.index].style.color = "white"
			h3[this.index].style.color = "white"
			this.style.backgroundColor = "#db2f43"
		}

	}

	liimg[0].onmouseover = function() {
		liimg[1].style.left = "420px"
		liimg[2].style.left = "641px"
	}

	liimg[1].onmouseover = function() {
		liimg[1].style.left = "211px"
		liimg[2].style.left = "641px"
	}

	liimg[2].onmouseover = function() {
		liimg[1].style.left = "211px"
		liimg[2].style.left = "420px"
	}
	liimg[3].onmouseover = function() {
		liimg[4].style.left = "420px"
		liimg[5].style.left = "641px"
	}

	liimg[4].onmouseover = function() {
		liimg[4].style.left = "211px"
		liimg[5].style.left = "641px"
	}

	liimg[5].onmouseover = function() {
		liimg[4].style.left = "211px"
		liimg[5].style.left = "420px"
	}
	liimg[6].onmouseover = function() {
		liimg[7].style.left = "420px"
		liimg[8].style.left = "641px"
	}

	liimg[7].onmouseover = function() {
		liimg[7].style.left = "211px"
		liimg[8].style.left = "641px"
	}

	liimg[8].onmouseover = function() {
		liimg[7].style.left = "211px"
		liimg[8].style.left = "420px"
	}

	var slider = document.getElementsByClassName('slider')[0]
	var move = document.getElementsByClassName('move')[0]
	var ul = move.getElementsByTagName('ul')[0]
	var prev = slider.getElementsByClassName('prev')[0]
	var next = slider.getElementsByClassName('next')[0]
	var Num = 0;
	var timer1 = null;
	timer1 = setInterval(function() {
		move1(1, 6, 1, 0)
	}, 2000)

	slider.onmouseover = function() {
		clearInterval(timer1)
	}
	slider.onmouseout = function() {
		timer1 = setInterval(function() {
			move1(1, 6, 1, 0)
		}, 2000)
	}
	prev.onclick = function() {
		move1(-1, -1, 4, -2590)

	}
	next.onclick = function() {
		move1(1, 6, 1, 0)

	}

	function move1(a, b, c, d) {
		Num = Num + a;
		if(Num === b) {
			ul.style.transition = "0s"
			ul.style.left = d + "px"
			Num = c;
			setTimeout(function() {
				ul.style.transition = "1s"
				ul.style.left = -Num * 370 + 'px'
			}, 15)
		} else {
			ul.style.left = -Num * 370 + 'px'
		}

	}

	var box1 = document.getElementsByClassName('c-3-r')[0]
	var box1_li = box1.getElementsByTagName('li')
	var b1 = 0;
	setInterval(function() {
		b1++;
		if(b1 === 6) {
			b1 = 0;
		}
		for(var a1 = 0; a1 < box1_li.length; a1++) {
			box1_li[a1].style.display = "none"
		}
		box1_li[b1].style.display = "block"
	}, 1400)

	var box2 = document.getElementsByClassName("box2")[0]
	var box3 = document.getElementsByClassName("box3")[0]

	var li2 = box2.getElementsByTagName("li");
	var div2 = box3.getElementsByTagName("div");
	var img2 = box2.getElementsByTagName('img');
	var p2 = box2.getElementsByTagName('p')
	li2[0].style.backgroundColor = "#d23345";
	p2[0].style.color = "white";
	img2[1].style.display = "block"
	for(var c = 0; c < li2.length; c++) {
		li2[c].index = c;

		//img2[this.index*2].style.display="none"
		li2[c].onmouseover = function() {
			img2[1].style.display = "none"
			for(var c = 0; c < li2.length; c++) {
				li2[c].style.backgroundColor = "";
				p2[c].style.color = "";
				div2[c].style.display = "none"
			}
			//img2[this.index*2-1].style.display="block"
			this.style.backgroundColor = "#d23345";
			p2[this.index].style.color = "white";
			div2[this.index].style.display = "block"
		}

	}
	var mouses = document.getElementsByClassName("mouses")[0]
	var change = document.getElementsByClassName("change")[0]
	var changeOl = change.getElementsByTagName("ol")
	var mouseLi = mouses.getElementsByTagName("li")

	for(var m = 0; m < mouseLi.length; m++) {
		mouseLi[m].index = m;
		mouseLi[m].onmouseover = function() {
			for(var m = 0; m < mouseLi.length; m++) {
				mouseLi[m].style.color = "white"
				changeOl[m].style.display = "none"
			}
			this.style.color = "#e6c573"
			changeOl[this.index].style.display = "block"
		}

	}

	var newsbig = document.getElementsByClassName("newsbig")[0]
	var newsul = newsbig.getElementsByTagName('ul')
	var newsspan = newsbig.getElementsByTagName('span')
	newsspan[0].style.color = "#d14d4d"
	for(var d = 0; d < newsspan.length; d++) {
		newsspan[d].index = d;
		newsspan[d].onmouseover = function() {
			for(var d = 0; d < newsspan.length; d++) {
				newsspan[d].style.color = ""
				newsul[d].style.display = "none"
			}
			this.style.color = "#d14d4d"
			newsul[this.index].style.display = "block"
		}

	}
	var newsbig1 = document.getElementsByClassName("newsbig")[1]
	var newsul1 = newsbig1.getElementsByTagName('ul')
	var newsspan1 = newsbig1.getElementsByTagName('span')
	newsspan1[0].style.color = "#d14d4d"
	for(var d1 = 0; d1 < newsspan1.length; d1++) {
		newsspan1[d1].index = d1;
		newsspan1[d1].onmouseover = function() {
			for(var d1 = 0; d1 < newsspan1.length; d1++) {
				newsspan1[d1].style.color = ""
				newsul1[d1].style.display = "none"
			}
			this.style.color = "#d14d4d"
			newsul1[this.index].style.display = "block"
		}

	}
	var newsbig2 = document.getElementsByClassName("newsbig")[2]
	var newsul2 = newsbig2.getElementsByTagName('ul')
	var newsspan2 = newsbig2.getElementsByTagName('span')
	newsspan2[0].style.color = "#d14d4d"
	for(var d2 = 0; d2 < newsspan2.length; d2++) {
		newsspan2[d2].index = d2;
		newsspan2[d2].onmouseover = function() {
			for(var d2 = 0; d2 < newsspan2.length; d2++) {
				newsspan2[d2].style.color = ""
				newsul2[d2].style.display = "none"
			}
			this.style.color = "#d14d4d"
			newsul2[this.index].style.display = "block"
		}

	}

	var outline = document.getElementsByClassName('outline')[0]
	var d_img = document.getElementsByClassName('d_img')[0]
	/*var d_prev = document.getElementsByClassName('d_prev')[0]
	var d_next = document.getElementsByClassName('d_next')[0]*/
	d_img.innerHTML = d_img.innerHTML + d_img.innerHTML;
	var timer_d = null;
	var speed_d = 0;
	d_img.style.width = d_img.offsetWidth * 2 + "px";
	timer_d = setInterval(function() {
		moveImg(-3000, 0)
	}, 30)
	outline.onmouseover = function() {
		clearInterval(timer_d);
	}
	outline.onmouseout = function() {
		timer_d = setInterval(function() {
			moveImg(-3000, 0)
		}, 30)
	}
	/*d_prev.onclick = function() {
		clearInterval(timer_d)
		timer_d = setInterval(function() {
			moveImg(-3000, 0)
		}, 30)
	}
	d_next.onclick = function() {
		clearInterval(timer_d)
		timer_d = setInterval(function() {
			moveImg(0, -3000)
		}, 30)
	}
*/
	function moveImg(iTarget, value) {
		if(iTarget > value) {
			speed_d = 2
		} else {
			speed_d = -2
		}
		if(d_img.offsetLeft === iTarget) {
			d_img.style.left = value;
		} else {
			d_img.style.left = d_img.offsetLeft + speed_d + "px"
		}
	}
	document.onscroll = function() {
		var scrollTop = document.getElementsByClassName("scrollTop")[0]
		var scrollH = document.body.scrollTop || document.documentElement.scrollTop
		if(scrollH > 800) {
			scrollTop.style.display = "block"
		} else {
			scrollTop.style.display = "none"
		}
	}
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
$(function() {
	$(".c-bottom ul li").hover(function() {
		$(this).addClass("animated bounce")
	}, function() {
		$(this).removeClass("animated bounce")
	})
	$(".logo li").hover(function() {
		$(this).addClass("hvr-ripple-out")
	}, function() {
		$(this).removeClass("hvr-ripple-out")
	})

})