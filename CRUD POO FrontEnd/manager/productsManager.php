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
			$item->setFirst($row["titre"]);
			$item->setLast($row["type"]);
			$item->setMatricule($row["prix"]);
			$item->setEmail($row["etat"]);
			array_push($stack, $item);
		}
		return $stack;

	}
//Add Product
		public function add($product){
			$dbh = new PDO("mysql:host=localhost;dbname=tableaux","root","Miriismail2002");
			$req = "INSERT INTO `exproduit`(`id`,`Firstname`, `Lastname`,`Matricule`,`Email`) VALUES (:id,:Firstname,:Lastname,:Matricule,:Email)";

			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":id",$product->getId(),PDO::PARAM_STR);	
			$updateProductQuery -> bindParam(":titre",$product->getName(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":type",$product->getLast(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":prix",$product->getMatricule(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":etat",$product->getEmail(),PDO::PARAM_STR);
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
			$req = "UPDATE exproduit SET Firstname = :Firstname,Lastname = :Lastname,Matricule = :Matricule,Email = :Email WHERE id = $id";
			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":Firstname",$product->getName(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Lastname",$product->getLast(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Matricule",$product->getMatricule(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Email",$product->getEmail(),PDO::PARAM_STR);
			$updateProductQuery->execute();
        }
}
?>