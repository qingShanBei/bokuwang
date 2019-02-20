<?php
    include 'connect.php';
    mysqli_query($conn,"set character set 'utf8'");
    mysqli_query($conn,"set names 'utf8'");
    header("content-type:text/html;charset=utf-8");
    $cid = isset($_GET['cid']) ? $_GET['cid'] : '8';
    $status = isset($_GET['status']) ? $_GET['status'] : 'join';
    $num = isset($_GET['num']) ? $_GET['num'] : '3';
    if($status=='initialize'){
        $sql = "SELECT * FROM goodslist where cid ='$cid'";

        $res = $conn->query($sql);
        
        $row = $res->fetch_all(MYSQLI_ASSOC);
        // var_dump($row[0]);
        // var_dump(['name'=>'liting']);
        // echo json_encode(['name'=>'liting']);
        echo json_encode($row); 
    }
    if($status=='join'){
        $sql = "SELECT * FROM car where cid ='$cid'";
        $res = $conn->query($sql);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        if($row){
            $res1 = $row[0]['totality'];
            $totality= $res1+$num;
            $sql ="update car set totality='$totality' where cid='$cid'";
            $res = $conn->query($sql);
        }else{
            $sql = "INSERT INTO car(cid,totality) VALUES('$cid','$num')";
            $res = $conn->query($sql);
        }
    }
    

?>