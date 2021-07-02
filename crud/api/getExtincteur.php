<?php

$dbh = new PDO("mysql:host=localhost;dbname=tableaux","root","Miriismail2002");
$sql = " SELECT * FROM exproduit ";
$extincteurQuery = $dbh->query($sql);
$getExtincteur = $extincteurQuery->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getExtincteur));
?>
