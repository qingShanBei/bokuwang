<?php

    include 'connect.php';

    header("content-type:text/html;charset=utf-8");
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
    $status = isset($_GET['status']) ? $_GET['status'] : '';
    if($status=='verify'){
        $sql = "SELECT * FROM users where username='$username'";
        $res = $conn->query($sql);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        if($row) {
            echo '用户名已存在';
        }else {
            echo '用户名能注册';

        }
    }
    if($status=='save'){
        $sql = "INSERT INTO users(username,password) VALUES('$username','$password')";
        $res = $conn->query($sql);
    }
    if($status=='demand'){
        $sql = "SELECT * FROM users where username='$username' or password='$password'";
        $res = $conn->query($sql);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        if($row) {
            echo '登录成功';
        }else {
            echo '用户名或密码不正确';

        }
    }
    
?>