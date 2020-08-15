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
      if ("0124578".includes(this.activeIndex)) {
        $(".navitem a").css("color", "#fff");
        $(".top-nav-left svg").attr("fill", "#fff");
        $(".top-nav-right-people img").attr("src", "/image/people3.png");
        $(".top-nav-right-buycar img").attr("src", "/image/buycar3.png");
      } else {
        $(".navitem a").css("color", "#333");
        $(".top-nav-left svg").attr("fill", "#008cff");
        $(".top-nav-right-people img").attr("src", "/image/people.png");
        $(".top-nav-right-buycar img").attr("src", "/image/buycar2.png");
      }
    },
  },
});

//初始化：关闭框内显示，清除背景颜色
$(".hoverdown-content").addClass("notshow");
$(".top-nav-wrap").css("background", "");

$(".top-nav-right-ul").on("mouseenter", "li", function () {
  $(".navitem a").addClass('blackpink');
  //关闭所有的框内显示
  $(".hoverdown-content").addClass("notshow");
  var index = $(this).index();
  $(".top-nav-wrap").addClass("whitebg");
  console.log(index, "我不是");
  if ("01239".includes(index)) {
    $(".top-nav-left svg").attr("fill", "#008cff");

    $(".navitem a").addClass("blackpink");

    console.log($(".navitem a").hasClass('blackpink'));
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
  $(".navitem a").removeClass('blackpink');
  $(".top-nav-left svg").attr("fill", "#fff");
  var index = $(this).index();
  console.log(index + "转身离开");
  $(".hoverdown-content").addClass("notshow");
  $(".hoverdownwrap").slideUp(30, "swing", function () {
    $(".top-nav-wrap").removeClass("whitebg");
  });
  console.log("我调用222");
});
