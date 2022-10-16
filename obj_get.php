<?php 
    include('conex.php');
    $query = "SELECT * FROM tb_objetos";
    $result = mysqli_query($conect, $query);
    if(!$result){
        die("query failed");
    }
    $list = array();
    while($row = mysqli_fetch_array($result)){
        $list[] = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'desc' => $row['description'],
            'cant' => $row['cant'],
            'date' => $row['date']
        );
    }
    $json_string = json_encode($list);
    echo $json_string;
?>