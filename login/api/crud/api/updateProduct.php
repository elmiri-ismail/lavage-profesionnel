<?php
require_once '../manager/productsManager.php';

$product = new Product;
$product->setId($_POST["id"]);
$product->setTitre($_POST["titre"]);
$product->setType($_POST["type"]);
$product->setPrix($_POST["prix"]);
$product->setEtat($_POST["etat"]);

$updateProductsManager = null;
$updateProductManager =  new productsManager(); 
$updateProductQuery = $updateProductManager->update($product);
?>