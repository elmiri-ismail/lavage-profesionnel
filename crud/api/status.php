<?php


@session_start();
if (isset($_SESSION['login'])) {

    $id = $_POST['id'];
    $etat = $_POST['etatJust'];
    
    $con = new PDO ("mysql:host=localhost;dbname=tableaux","root","Miriismail2002");
    $querySql = "UPDATE exproduit SET etat = '$etat' WHERE id = '$id' ";
    $aplySQL = $con -> prepare($querySql);
    $aplySQL -> execute();
    
}else{
    echo "false";
}








?>