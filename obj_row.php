<?php 
    include('conex.php');
    $id = $_POST['id'];
    $query = "SELECT * from tb_objetos WHERE id = {$id}";
    $result = mysqli_query($conect, $query);
    if(!$result){
        die('Query Failed'. mysqli_error($connection));
    }
    $object = array();
    while($row = mysqli_fecth_array($result)){
        $object[] = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'desc' => $row['description'],
            'cant' => $row['cant'],
            'date' => $row['date']
        );
    }
    $json_string = json_encode($object[0]);
    echo $json_string;

?>