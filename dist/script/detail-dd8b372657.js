"use strict";$(".hoverdown-content").addClass("notshow"),$(".top-nav-wrap").css("background",""),$(".top-nav-right-ul").on("mouseenter","li",function(){$(".navitem a").addClass("blackpink"),$(".hoverdown-content").addClass("notshow");var o=$(this).index();$(".top-nav-wrap").addClass("whitebg"),console.log(o,"我不是"),"01239".includes(o)?($(".navitem a").addClass("blackpink"),console.log($(".navitem a").hasClass("blackpink")),console.log($(this).index()+"进来了"),$(".hoverdown-content").eq(o).removeClass("notshow"),$(".hoverdownwrap").slideDown(30,"swing",function(){})):($(".hoverdown-content").addClass("notshow"),$(".hoverdownwrap").slideUp(30,"swing",function(){$(".top-nav-wrap").removeClass("whitebg"),$(".navitem a").removeClass("blackpink")}))}),$(".top-nav-right-uldown").on("mouseleave",function(){$(".navitem a").removeClass("blackpink");var o=$(this).index();console.log(o+"转身离开"),$(".hoverdown-content").addClass("notshow"),$(".hoverdownwrap").slideUp(30,"swing",function(){$(".top-nav-wrap").removeClass("whitebg")}),console.log("我调用222")}),$.ajax({url:"../json/detail.json",type:"get",dataType:"json",success:function(o){$.each(o,function(o,n){var t;console.log("可怕你怎么进不来"),console.log(n.goodsnum),n.goodsnum==window.location.search.substr(10)&&(console.log("true"),t=' <img src="'.concat(n.imgs[0],'" alt="">'),$(".detail-left-bigimg").append(t),$.each(n.imgs,function(o,n){console.log(n);var t=' <img src="'.concat(n,'" alt="">');$(".detail-left-smallimg").append(t)}),$(".detail-right h1").append(n.tit),$(".detail-right p").append(n.desc),$(".price1").append(n.newprice),$(".delprice").append(n.oldprice))})}}),$.ajax({url:"../json/detail.json",type:"get",dataType:"json",success:function(o){var s=0;$.each(o,function(o,n){if(console.log(n.goodsnum.slice(0,1)),console.log(n.goodsnum),s<8)switch(n.goodsnum.slice(0,1)){case"9":var t='\n            <li>\n            <a href="./detail.html?goodsnum='.concat(n.goodsnum,'">\n            <img src="').concat(n.imgs,'" alt="">\n            <p>【热卖】').concat(n.tit,"</p>\n            <p>￥").concat(n.newprice,"</p>\n            </a>\n          </li>\n            ");$(".hoverdown-content").eq(0).append(t),s++,console.log("bobobo"),console.log($(".hoverdown-content").eq(0))}})}}),$(".detail-left-smallimg").on("click","img",function(){$(".detail-left-bigimg img").prop("src",$(this).prop("src"))}),$(".xiangguan .part2-cont .part2-cont-box").eq(0).css("color","#000"),$(".xiangguan .part2-cont .part2-cont-box").eq(0).css("border","1px solid #000"),$(".xiangguan .part2-cont").on("click",".part2-cont-box",function(){$(".xiangguan .part2-cont .part2-cont-box").css("color","#bfbfbf"),$(".xiangguan .part2-cont .part2-cont-box").css("border","1px solid #bfbfbf"),$(this).css("color","#000"),$(this).css("border","1px solid #000")}),$(".yanse .part2-cont .part2-cont-box").eq(0).css("color","#000"),$(".yanse .part2-cont .part2-cont-box").eq(0).css("border","1px solid #000"),$(".yanse .part2-cont").on("click",".part2-cont-box",function(){$(".yanse .part2-cont .part2-cont-box").css("color","#bfbfbf"),$(".yanse .part2-cont .part2-cont-box").css("border","1px solid #bfbfbf"),$(this).css("color","#000"),$(this).css("border","1px solid #000")}),console.log($(".huabei .part2-cont .part2-cont-box").eq(0).children()),$(".huabei .part2-cont .part2-cont-box").eq(0).children().css("color","#000"),$(".huabei .part2-cont .part2-cont-box").eq(0).css("border","1px solid #000"),$(".huabei .part2-cont").on("click",".part2-cont-box",function(){$(".huabei .part2-cont .part2-cont-box").children().css("color","#bfbfbf"),$(".huabei .part2-cont .part2-cont-box").css("border","1px solid #bfbfbf"),$(this).children().css("color","#000"),$(this).css("border","1px solid #000")}),$(".jian").on("click",function(){1<$(".shu").text()?$(".shu").text($(".shu").text()-1):$(".jian").css("color","#e0e0e0")}),$(".jia").on("click",function(){$(".shu").text(1+parseInt($(".shu").text())),1<=$(".shu").text()&&$(".jian").css("color","#000")});