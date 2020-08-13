var mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal", // 切换方向选项
  loop: true, // 循环模式选项

  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
  },
});

$(".hoverdown-content").addClass("notshow");
$(".top-nav-wrap").css("background", "");
$(".top-nav-right-ul").on("mouseenter", "li", function () {
  $(".hoverdown-content").addClass("notshow");
  var index = $(this).index();
  $(".top-nav-wrap").addClass("whitebg");
  console.log(index,"我不是");
  if ("01239".includes(index)) {
    console.log($(this).index() + "进来了");
    $(".hoverdown-content").eq(index).removeClass('notshow');
    $(".hoverdownwrap").slideDown(30, "swing", function () {});
  }
  else{
    $(".hoverdown-content").addClass("notshow");
    $(".hoverdownwrap").slideUp(30, "swing", function () {
      $(".top-nav-wrap").removeClass("whitebg");
    });
  }
});

$(".top-nav-right-uldown").on("mouseleave", function () {
  var index = $(this).index();
  console.log(index + "转身离开");
  $(".hoverdown-content").addClass("notshow");
  $(".hoverdownwrap").slideUp(30, "swing", function () {
    $(".top-nav-wrap").removeClass("whitebg");
  });
  console.log('我调用222');

});
