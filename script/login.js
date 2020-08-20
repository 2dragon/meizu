// var flag = 0;
// $("#phone").on("blur", function () {
//   var phone = $("#phone").val();
//   if (/^1[3456789]\d{9}$/.test(phone)) {
//     $(".phonetip").text("输入格式正确");
//     flag ++;
//   } else if (!$("#phone").val()) {
//     $(".phonetip").text("请输入正确的手机号码");
//   } else {
//     $(".phonetip").text("您的输入格式有误");
//   }
// });
// $("#password").keyup(function () {
//   var chinese = new RegExp("[\\u4E00-\\u9FFF]+", "g");
//   if (/\s/.test($("#password").val())) {
//     $(".passwordtip").text("正确的密码不应该有空格");
//   } else if (chinese.test($("#password").val())) {
//     $(".passwordtip").text("正确的密码不应该有中文");
//   } else {
//     var enough = new RegExp("(?=.{6,}).*", "g");
//     if (false == enough.test($("#password").val())) {
//       $(".passwordtip").text("正确密码长度应该大于6位数");
//     }else{
//       flag++;
//       $('.passwordtip').text('输入格式正确');
//     }
//   }
// });
// $(".btn").on("click", function () {
//   var phone = $("#phone").val();
//   var password = $("#password").val();

//   console.log("获取inp");
//   console.log(phone);
//   console.log(password);
//   console.log("btn提交注册");

//   $.ajax({
//     url: "../php/register.php",
//     type: "post",
//     dataType: "json",
//     data: {
//       phone: phone,
//       password: password,
//     },
//     success: function (json) {
//       if (json.err == 1) {
//         alert(json.msg);
//         setTimeout(function () {
//           window.location.href = "http://10.20.158.18/dist/pages/login.html";
//         }, 300);
//       } else {
//         alert(json.msg);
//       }
//     },
//     error: function () {
//       alert("连接数据库失败");
//     },
//   });
// });

$(".btn").on("click", function () {
  var phone = $("#phone").val();
  var password = $("#password").val();

  console.log("获取inp");
  console.log(phone);
  console.log(password);
  console.log("btn提交注册");

  $.ajax({
    url: "../php/login.php",
    type: "post",
    dataType: "json",
    data: {
      phone: phone,
      password: password,
    },
    success: function (json) {
      if (json.err == 1) {
        alert(json.msg);
        localStorage.setItem("phone", phone);
        setTimeout(function () {
          window.location.href = "http://10.20.158.18/dist/pages/index.html";
        }, 300);
      } else {
        alert(json.msg);
      }
    },
    error: function () {
      alert("连接数据库失败");
    },
  });
});
