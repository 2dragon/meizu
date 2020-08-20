var flag1=0,flag2=0;
$("#phone").on("blur", function () {
  var phone = $("#phone").val();
  if (/^[1][0-9]{10}/.test(phone)) {
    $(".phonetip").text("输入正确");
    flag1 = 1;
  } else if (!$("#phone").val()) {
    $(".phonetip").text("请输入正确的手机号码");
  } else {
    $(".phonetip").text("您的输入有误");
  }
});
$("#password").keyup(function () {
  var chinese = new RegExp("[\\u4E00-\\u9FFF]+", "g");
  if (/\s/.test($("#password").val())) {
    $(".passwordtip").text("不能有空格");
    flag2 = 0;
  } else if (chinese.test($("#password").val())) {
    $(".passwordtip").text("不能有中文");
    flag2 = 0;
  } else {
    var strong = new RegExp(
      "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
      "g"
    );
    var medium = new RegExp(
      "^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
      "g"
    );
    var enough = new RegExp("(?=.{6,}).*", "g");
    if (false == enough.test($("#password").val())) {
      $(".passwordtip").text("长度需大于6位数");
    } else if ($("#phone").val() == $("#password").val()) {
      $(".passwordtip").text("密码不能与账号相同");
      flag2 = 0;
    } else if (strong.test($("#password").val())) {
      $(".passwordtip").text("强");
      flag2 = 1;
    } else if (medium.test($("#password").val())) {
      $(".passwordtip").text("中");
      flag2 = 1;
    } else {
      $(".passwordtip").text("弱");
      flag2 = 1;
    }
  }
});
$(".btn").on("click", function () {
  var phone = $("#phone").val();
  var password = $("#password").val();

  console.log("获取inp");
  console.log(phone);
  console.log(password);
  console.log("btn提交注册");
  if (flag1 + flag2 == 2) {
    $.ajax({
      url: "../php/register.php",
      type: "post",
      dataType: "json",
      data: {
        phone: phone,
        password: password,
      },
      success: function (json) {
        if (json.err == 1) {
          alert(json.msg);
          setTimeout(function () {
            window.location.href = "http://10.20.158.18/dist/pages/login.html";
          }, 300);
        } else {
          alert(json.msg);
        }
      },
      error: function () {
        alert("连接数据库失败");
      },
    });
  }
  else{
    alert("请正确输入账号密码！");
    return;
  }
});
