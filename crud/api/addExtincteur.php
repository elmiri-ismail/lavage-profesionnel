<?php

@session_start();
if (isset($_SESSION['login'])) {
    $dbh = new PDO("mysql:host=localhost;dbname=tableaux","root","Miriismail2002");
    $sql = " INSERT INTO exproduit(titre,type,prix,etat) VALUES (:titre,:type,:prix,:etat)";
    $addStudentsQuery = $dbh->prepare($sql);
    $addStudentsQuery->bindParam(":titre",$_POST["titre"],PDO::PARAM_STR);
    $addStudentsQuery->bindParam(":type",$_POST["type"],PDO::PARAM_STR);
    $addStudentsQuery->bindParam(":prix",$_POST["prix"],PDO::PARAM_STR);
    $addStudentsQuery->bindParam(":etat",$_POST["etat"],PDO::PARAM_STR);
    $addStudentsQuery->execute();
}else{
    echo "false";
}


?>
