<?php
    include 'connect.php';
    mysqli_query($conn,"set character set 'utf8'");
    mysqli_query($conn,"set names 'utf8'");
    header("content-type:text/html;charset=utf-8");
    $status = isset($_GET['status']) ? $_GET['status'] : '';
    if($status=='initialize'){
        $sql = "SELECT * FROM car";
        $res = $conn->query($sql);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        for($i=0;$i<count($row);$i++){
            $cid=$row[$i]['cid'];
        $totality=$row[$i]['totality'];
        $sql1 = "SELECT * FROM goodslist where cid='$cid'";
        $res1 = $conn->query($sql1);
        $row1 = $res1->fetch_all(MYSQLI_ASSOC);
        $img = $row1[0]['img'];
        $title = $row1[0]['title'];
        $pricing = $row1[0]['pricing'];
        $sellingPrice = $row1[0]['sellingPrice'];
        $repertory = $row1[0]['repertory'];
        if($totality>$repertory){
            $totality=$repertory;
        }
        $sum = $sellingPrice*$totality;
        $car =array(
            'cid' => $cid,
            'totality' => $totality,
            'img' => $img,
            'title' => $title,   
            'pricing' => $pricing,
            'sellingPrice' => $sellingPrice,
            'repertory' => $repertory,
            'sum' => $sum
            );
        $cars[]= $car;
        }
        echo json_encode($cars,JSON_UNESCAPED_UNICODE);
    }
    if($status=='plus'){
        $cid = isset($_GET['cid']) ? $_GET['cid'] : '';
        $totality = isset($_GET['totality']) ? $_GET['totality'] : '';
        $sql ="update car set totality='$totality' where cid='$cid'";
        $res = $conn->query($sql);
    }
    if($status=='del'){
        $cids = isset($_GET['cids']) ? $_GET['cids'] : '';
        $cidss = json_decode($cids);
        for($i=0;$i<count($cidss);$i++){
            $cid =  $cidss[$i];
            $sql ="delete from car where cid='$cid'";
            $res = $conn->query($sql);

        }
        
    }
?>