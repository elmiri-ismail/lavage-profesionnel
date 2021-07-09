<?php


@session_start();
if (isset($_SESSION['login'])) {
    $id = $_POST['id'];
    $con = new PDO("mysql:host=localhost;dbname=tableaux","root","Miriismail2002");
    $querySQL = "DELETE FROM exproduit WHERE id = '$id' ";
    $applySQL = $con -> prepare($querySQL);
    $applySQL -> execute();
}else{
    echo "false";
}


?>