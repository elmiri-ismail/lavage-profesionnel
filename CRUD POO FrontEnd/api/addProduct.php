<?php
require_once '../manager/productsManager.php';

$product = new Product();
$product->setTitre($_POST["titre"]);
$product->setType($_POST["type"]);
$product->setPrix($_POST["prix"]);
$product->setEtat($_POST["etat"]);

$addProductManager = null;
$addProductManager =  new productsManager(); 
$addProductQuery = $addProductManager->add($product);

?>