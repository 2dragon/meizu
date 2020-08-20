var logoa1 = "../image/people3.png";
var logoa2 = "../image/people.png";
var logo3 = "../image/bearbb.png";

console.log("phone" + localStorage.getItem("phone"));
if (localStorage.getItem("phone")) {
  logoa1 = logo3;
  logoa2 = logo3;
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

$.ajax({
  url: "../json/top.json",
  type: "get",
  dataType: "json",
  success: function (jsonArr) {
    //渲染数据

    $.each(jsonArr, function (index, item) {
      console.log(item.goodsnum.slice(0, 1));
      console.log(item.goodsnum);
      switch (item.goodsnum.slice(0, 1)) {
        case "1":
          console.log("执行", 1);
          var goodsDom1 = ` <div class="swiper-slide">
      <a href="./detail.html?goodsnum=${item.goodsnum}">
        <img src="${item.src}" alt="1">
      </a>
    </div>`;
          $(".swiper-wrapper").append(goodsDom1);
          break;

        case "4":
          var goodsDom4 = ` 
        <a href="./detail.html?goodsnum=${item.goodsnum}">
        <div class="fourshow-goods yinying">
          <img src="${item.src}" alt="">
          <div class="goodstit">
            <h1>${item.name}</h1>
            <p>${item.desc}</p>
            <h2> <i>￥</i>${item.price}<em></em><s></s></h2>
          </div>
        </div>
        </a>`;
          $(".fourshow").append(goodsDom4);
          break;

        case "9":
          var goodsDom9 = `
            <li>
            <a href="./detail.html?goodsnum=${item.goodsnum}">
            <img src="${item.src}" alt="">
            <p>【热卖】${item.name}</p>
            <p>￥${item.newprice}</p>
            </a>
          </li>
            `;
          $(".hoverdown-content").eq(0).append(goodsDom9);
          console.log("bobobo");
          console.log($(".hoverdown-content").eq(0));
          break;
      }
    });

    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 切换方向选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      on: {
        slideChangeTransitionEnd: function (swiper, event) {
          console.log("触发改变了", this.activeIndex);
          //你的事件
          if ("012578".includes(this.activeIndex)) {
            $(".navitem a").css("color", "#fff");
            $(".top-nav-left svg").attr("fill", "#fff");
            $(".top-nav-right-people img").attr("src", logoa1);
            $(".top-nav-right-buycar img").attr("src", "../image/buycar3.png");
          } else {
            $(".navitem a").css("color", "#333");
            $(".top-nav-left svg").attr("fill", "#008cff");
            $(".top-nav-right-people img").attr("src", logoa2);
            $(".top-nav-right-buycar img").attr("src", "../image/buycar2.png");
          }
        },
      },
    });
  },
});
$.ajax({
  url: "../json/detail.json",
  type: "get",
  dataType: "json",
  success: function (jsonArr) {
    //渲染数据
    var itemnum = 0;
    $.each(jsonArr, function (index, item) {
      console.log(item.goodsnum.slice(0, 1));
      console.log(item.goodsnum);
      if (itemnum < 8) {
        switch (item.goodsnum.slice(0, 1)) {
          case "9":
            var goodsDom9 = `
            <li>
            <a href="./detail.html?goodsnum=${item.goodsnum}">
            <img src="${item.imgs}" alt="">
            <p>【热卖】${item.tit}</p>
            <p>￥${item.newprice}</p>
            </a>
          </li>
            `;
            $(".hoverdown-content").eq(0).append(goodsDom9);
            itemnum++;
            console.log("bobobo");
            console.log($(".hoverdown-content").eq(0));
            break;
        }
      }
    });
  },
});
//初始化：关闭框内显示，清除背景颜色
$(".hoverdown-content").addClass("notshow");
$(".top-nav-wrap").css("background", "");

$(".top-nav-right-ul").on("mouseenter", "li", function () {
  $(".navitem a").addClass("blackpink");
  //关闭所有的框内显示
  $(".hoverdown-content").addClass("notshow");
  var index = $(this).index();
  $(".top-nav-wrap").addClass("whitebg");
  console.log(index, "我不是");
  if ("01239".includes(index)) {
    $(".top-nav-left svg").attr("fill", "#008cff");

    $(".navitem a").addClass("blackpink");

    console.log($(".navitem a").hasClass("blackpink"));
    console.log($(this).index() + "进来了");
    //打开指定的内容显示
    $(".hoverdown-content").eq(index).removeClass("notshow");
    $(".hoverdownwrap").slideDown(30, "swing", function () {});
  } else {
    $(".top-nav-left svg").attr("fill", "#fff");
    $(".hoverdown-content").addClass("notshow");
    $(".hoverdownwrap").slideUp(30, "swing", function () {
      $(".top-nav-wrap").removeClass("whitebg");
      $(".navitem a").removeClass("blackpink");
    });
  }
});

$(".top-nav-right-uldown").on("mouseleave", function () {
  $(".navitem a").removeClass("blackpink");
  $(".top-nav-left svg").attr("fill", "#fff");
  var index = $(this).index();
  console.log(index + "转身离开");
  $(".hoverdown-content").addClass("notshow");
  $(".hoverdownwrap").slideUp(30, "swing", function () {
    $(".top-nav-wrap").removeClass("whitebg");
  });
  console.log("我调用222");
});
