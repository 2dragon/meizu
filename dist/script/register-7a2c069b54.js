"use strict";$(".btn").on("click",function(){var o=$("#phone").val(),t=$("#password").val();console.log("获取inp"),console.log(o),console.log(t),console.log("btn提交注册"),$.ajax({url:"../php/register.php",type:"post",dataType:"json",data:{phone:o,password:t},success:function(o){1==o.err?(alert(o.msg),setTimeout(function(){window.location.href="http://10.20.158.18/dist/pages/login.html"},300)):alert(o.msg)},error:function(){alert("连接数据库失败")}})});