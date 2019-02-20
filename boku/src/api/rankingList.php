<?php
    include 'connect.php';
    mysqli_query($conn,"set character set 'utf8'");
    mysqli_query($conn,"set names 'utf8'");
    header("content-type:text/html;charset=utf-8");
    $page = isset($_GET['page']) ? $_GET['page'] : '';
    $qty = isset($_GET['qty']) ? $_GET['qty'] : '';
    $status = isset($_GET['status']) ? $_GET['status'] : '';
    if($status=='initialize'){
        $sql = "select * from goodslist  order by salesVolume desc limit $page,$qty";
        // echo $qty;
        $res = $conn->query($sql);
        
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $sql1 = "SELECT * FROM goodslist";
        // echo $qty;
        $res1 = $conn->query($sql1);
        
        $row1 = $res1->fetch_all(MYSQLI_ASSOC);
        $goods  = array(
            'row' => $row,
            'totality' => count($row1),
             );
        echo json_encode($goods,JSON_UNESCAPED_UNICODE);   
    }
    else{
        $sql = "select * from goodslist  where classify='童书'  order by salesVolume desc  limit $page,$qty";
        // echo $qty;
        $res = $conn->query($sql);
        
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $sql1 = "SELECT * FROM goodslist";
        // echo $qty;
        $res1 = $conn->query($sql1);
        
        $row1 = $res1->fetch_all(MYSQLI_ASSOC);
        $goods  = array(
            'row' => $row,
            'totality' => count($row1),
             );
        echo json_encode($goods,JSON_UNESCAPED_UNICODE);   
    }
    
?>