<?php 
    include('conex.php');
    $query = "SELECT * FROM task";
    $result = mysqli_query($conect, $query);
    if(!$result){
        die("query failed");
    }
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'name' => $row['name'],
            'description' => $row['description'],
            'id' => $row['id']

        );
    }
    $json_string = json_encode($json);
    echo $json_string;
?>