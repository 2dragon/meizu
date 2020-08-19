$(".btn").on("click", function () {
  var phone = $("#phone").val();
  var password = $("#password").val();

  console.log("获取inp");
  console.log(phone);
  console.log(password);
  console.log("btn提交注册");

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
});
