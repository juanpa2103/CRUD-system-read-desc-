<?php 
    include('conex.php');

    $name = $_POST['name'];
    $desc = $_POST['desc'];
    $cant = $_POST['cant'];
    $date = $_POST['date'];
    $query = "INSERT INTO tb_objetos(name, description, cant, date) VALUES ('$name','$desc','$cant','$date')";
    $result = mysqli_query($conect,$query);
    if(!$result){
        die('Query Failed.');
    }
    echo 'El objeto se agregó correctamente';

?>