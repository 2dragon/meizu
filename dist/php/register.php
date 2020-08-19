<?php
    header("Content-Type:text/html;charset=utf-8");
    header("Access-Control-Allow-Origin: *");
    $phone = $_REQUEST['phone'];
    $password = $_REQUEST['password'];
    $link=mysqli_connect('localhost','root','123456','meizu');
    if(!$link){
        die('连接失败：'.mysqli_connect_error());
    }
    mysqli_set_charset($link,'utf-8');

    $sql = "insert into user (phone,password) values ('$phone','$password')";

    // 执行修改sql语句
    $res = mysqli_query($link,$sql);


    // 给与提示
    if(!$res){
        echo '{"err":0,"msg":"注册失败"}';
        die();
    }
    echo '{"err":1,"msg":"注册成功"}';

    // 关关闭连接
    mysqli_close($link);
?>


