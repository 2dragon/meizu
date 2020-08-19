console.log("进来了吗？？？");
$.ajax({
  url: "../json/detail.json",
  type: "get",
  dataType: "json",
  success: function (jsonArr) {
    //渲染数据
    console.log("成功了吗？");
    $.each(jsonArr, function (index, item) {
      console.log(item.goodsnum.slice(0, 1));
      
      if (item.goodsnum.slice(0, 1) == 9) {
		  console.log(item.imgs[0]);
		var goodsDom = `  <a href="./detail.html?goodsnum=${item.goodsnum}">
		 <div class="list-goods-item">
		<div class="imgwindow">
			<div class="imgscroll">
				<img src="${item.imgs[0]}" alt="">
				<!-- <img src="../image/list/9001.jpg" alt=""> -->
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
