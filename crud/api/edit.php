<?php


@session_start();
if (isset($_SESSION['login'])) {
    $id = $_POST['id'];
    $titre = $_POST['titre'];
    $type = $_POST['type'];
    $prix = $_POST['prix'];
    
    $con = new PDO ("mysql:host=localhost;dbname=tableaux","root","Miriismail2002");
    $querySql = "UPDATE exproduit SET titre = '$titre', type = '$type', prix = '$prix' WHERE id = '$id' ";
    
    $aplySQL = $con -> prepare($querySql);
    $aplySQL -> execute();
}else{
    echo "false";
}






?>
