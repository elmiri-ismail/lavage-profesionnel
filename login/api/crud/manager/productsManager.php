<?php
require_once('../model/product.php');

class productsManager {

	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=tableaux","root","Miriismail2002");
		$stack = array();
		$req = "SELECT * FROM exproduit";
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$item = new Product();
			$item->setId($row["id"]);
			$item->setTitre($row["titre"]);
			$item->setType($row["type"]);
			$item->setPrix($row["prix"]);
			$item->setEtat($row["etat"]);
			array_push($stack, $item);
		}
		return $stack;

	}
//Add Product
		public function add($product){
			$dbh = new PDO("mysql:host=localhost;dbname=tableaux","root","Miriismail2002");
			$req = "INSERT INTO `exproduit`(`id`,`titre`, `type`,`prix`,`etat`) VALUES (:id,:titre,:type,:prix,:etat)";

			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":id",$product->getId(),PDO::PARAM_STR);	
			$updateProductQuery -> bindParam(":titre",$product->getTitre(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":type",$product->getType(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":prix",$product->getPrix(),PDO::PARAM_STR);
			$updateProductQuery -> bindParam(":etat",$product->getEtat(),PDO::PARAM_STR);
			$updateProductQuery->execute();
        }
		// delete product

		public function delete($id){
			$dbh = new PDO("mysql:host=localhost;dbname=tableaux","root","Miriismail2002");

			$req = "DELETE FROM exproduit WHERE id = $id";
			$deleteProduct = $dbh->prepare($req);
            $deleteProduct->execute();
        }
		// update product		
		public function update($product){
			$id = $product->getId();
			$dbh = new PDO("mysql:host=localhost;dbname=tableaux","root","Miriismail2002");
			$req = "UPDATE exproduit SET titre = :titre,type = :type,prix = :prix,etat = :etat WHERE id = $id";
			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":id",$product->getId(),PDO::PARAM_STR);
			$updateProductQuery -> bindParam(":titre",$product->getTitre(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":type",$product->getType(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":prix",$product->getPrix(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":etat",$product->getEtat(),PDO::PARAM_STR);
			$updateProductQuery->execute();
        }
}
?>