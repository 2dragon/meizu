var logoa1 = "../image/people3.png";
var logoa2 = "../image/people.png";
var logo3 = "../image/bearbb.png";

if (localStorage.getItem("phone")) {
  $(".top-nav-right-people img").attr("src", logo3);
  $(".people-down-ul")
    .html(` <li><a href="./index.html" class="tuichu">退出登录</a></li>
  <li><a href="#">我的订单</a></li>
  <li><a href="#">M码通道</a></li>`);
}
$(".tuichu").on("click", function () {
  localStorage.clear();
  logoa1 = "../image/people3.png";
  logoa2 = "../image/people.png";
  $(".people-down-ul").html(` <li><a href="./login.html">立即登录</a></li>
                    <li><a href="./register.html">立即注册</a></li>
  <li><a href="#">我的订单</a></li>
  <li><a href="#">M码通道</a></li>`);
});

//头部
// 初始化：关闭框内显示，清除背景颜色
$(".hoverdown-content").addClass("notshow");
$(".top-nav-wrap").css("background", "");

$(".top-nav-right-ul").on("mouseenter", "li", function () {
  $(".navitem a").addClass("blackpink");
  //关闭所有的框内显示
  $(".hoverdown-content").addClass("notshow");
  var index = $(this).index();
  $(".top-nav-wrap").addClass("whitebg");
  if ("01239".includes(index)) {
    // $(".top-nav-left svg").attr("fill", "#008cff");

    $(".navitem a").addClass("blackpink");
    //打开指定的内容显示
    $(".hoverdown-content").eq(index).removeClass("notshow");
    $(".hoverdownwrap").slideDown(30, "swing", function () {});
  } else {
    // $(".top-nav-left svg").attr("fill", "#fff");
    $(".hoverdown-content").addClass("notshow");
    $(".hoverdownwrap").slideUp(30, "swing", function () {
      $(".top-nav-wrap").removeClass("whitebg");
      $(".navitem a").removeClass("blackpink");
    });
  }
});
$(".top-nav-right-uldown").on("mouseleave", function () {
  $(".navitem a").removeClass("blackpink");
  // $(".top-nav-left svg").attr("fill", "#fff");
  var index = $(this).index();
  $(".hoverdown-content").addClass("notshow");
  $(".hoverdownwrap").slideUp(30, "swing", function () {
    $(".top-nav-wrap").removeClass("whitebg");
  });
});

$.ajax({
  url: "../json/detail.json",
  type: "get",
  dataType: "json",
  success: function (jsonArr) {
    //渲染数据
    $.each(jsonArr, function (index, item) {
      var flag;
      var flagname;
      switch (window.location.search.substr(6)) {
        case "phone":
          flag = 9;
          flagname="手机";
          break;
        case "voice":
          flag = 8;
          flagname="声学";
          break;
        case "accessories":
          flag = 8;
          flagname="配件";
          break;
        case "life":
          flag = 8;
          flagname="生活";
          break;
      }
      if (item.goodsnum.slice(0, 1) == flag) {
        $(".list-tips-tit").text(flagname);
        var goodsDom = `  <a href="./detail.html?goodsnum=${item.goodsnum}">
		 <div class="list-goods-item">
		<div class="imgwindow">
			<div class="imgscroll">
				<img src="${item.imgs[0]}" alt="">
				<!-- <img src=flag"../image/list/9001.jpg" alt=""> -->
			</div>
		</div>
		<ul class="tiao">
			<!-- <li></li>
			<li></li> -->
		</ul>
		<div class="item-desc">
			<h3 class="title">${item.tit}</h3>
			<p class="desc">${item.desc}</p>
			<h4 class="price">
				<em>￥</em><span class="vm-price">${item.newprice}</span>
			</h4>
		</div>
	</div></a>`;
        $(".list-goods").append(goodsDom);
      }
    });
  },
});
