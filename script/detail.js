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
  console.log(index, "我不是");
  if ("01239".includes(index)) {
    // $(".top-nav-left svg").attr("fill", "#008cff");

    $(".navitem a").addClass("blackpink");

    console.log($(".navitem a").hasClass("blackpink"));
    console.log($(this).index() + "进来了");
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
  console.log(index + "转身离开");
  $(".hoverdown-content").addClass("notshow");
  $(".hoverdownwrap").slideUp(30, "swing", function () {
    $(".top-nav-wrap").removeClass("whitebg");
  });
  console.log("我调用222");
});
//渲染数据
$.ajax({
  url: "../json/detail.json",
  type: "get",
  dataType: "json",
  success: function (jsonArr) {
    $.each(jsonArr, function (index, item) {
      console.log("可怕你怎么进不来");
      console.log(item.goodsnum);
      if (item.goodsnum == window.location.search.substr(10)) {
        console.log("true");
        var bigimg = ` <img src="${item.imgs[0]}" alt="">`;
        $(".detail-left-bigimg").append(bigimg);

        $.each(item.imgs, function (index, item) {
          console.log(item);
          var smallimg = ` <img src="${item}" alt="">`;
          $(".detail-left-smallimg").append(smallimg);
        });

        $(".detail-right h1").append(item.tit);
        $(".detail-right p").append(item.desc);
        $(".price1").append(item.newprice);
        $(".delprice").append(item.oldprice);
      }
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





//点击选框变化颜色
$(".detail-left-smallimg").on("click", "img", function () {
  $(".detail-left-bigimg img").prop("src", $(this).prop("src"));
});

$(".xiangguan .part2-cont .part2-cont-box").eq(0).css("color", "#000");
$(".xiangguan .part2-cont .part2-cont-box")
  .eq(0)
  .css("border", "1px solid #000");
$(".xiangguan .part2-cont").on("click", ".part2-cont-box", function () {
  $(".xiangguan .part2-cont .part2-cont-box").css("color", "#bfbfbf");
  $(".xiangguan .part2-cont .part2-cont-box").css(
    "border",
    "1px solid #bfbfbf"
  );
  $(this).css("color", "#000");
  $(this).css("border", "1px solid #000");
});

$(".yanse .part2-cont .part2-cont-box").eq(0).css("color", "#000");
$(".yanse .part2-cont .part2-cont-box").eq(0).css("border", "1px solid #000");
$(".yanse .part2-cont").on("click", ".part2-cont-box", function () {
  $(".yanse .part2-cont .part2-cont-box").css("color", "#bfbfbf");
  $(".yanse .part2-cont .part2-cont-box").css("border", "1px solid #bfbfbf");
  $(this).css("color", "#000");
  $(this).css("border", "1px solid #000");
});
console.log($(".huabei .part2-cont .part2-cont-box").eq(0).children());
$(".huabei .part2-cont .part2-cont-box").eq(0).children().css("color", "#000");
$(".huabei .part2-cont .part2-cont-box").eq(0).css("border", "1px solid #000");
$(".huabei .part2-cont").on("click", ".part2-cont-box", function () {
  $(".huabei .part2-cont .part2-cont-box").children().css("color", "#bfbfbf");
  $(".huabei .part2-cont .part2-cont-box").css("border", "1px solid #bfbfbf");
  $(this).children().css("color", "#000");
  $(this).css("border", "1px solid #000");
});
// 加减
$(".jian").on("click", function () {
  if ($(".shu").text() > 1) {
    $(".shu").text($(".shu").text() - 1);
  } else {
    $(".jian").css("color", "#e0e0e0");
  }
});
$(".jia").on("click", function () {
  $(".shu").text(1 + parseInt($(".shu").text()));
  if ($(".shu").text() >= 1) {
    $(".jian").css("color", "#000");
  }
});
