<?php

class Product implements JsonSerializable {
	public function jsonSerialize()
    {
        return array(
			 'id' => $this->_id,
             'titre' => $this->_titre,
             'type' => $this->_type,
             'prix' => $this->_prix,
             'etat' => $this->_etat,
        );
    }
	private $_id;
	private $_titre;
	private $_type;
	private $_prix;
	private $_etat;
	
	public function __construct() {
	
	}
	// public function __construct($data) {
	// 	$this->fill($data);
	// }
		public function getId() { return $this->_id; }
		public function getTitre() { return $this->_titre; }
		public function getType() { return $this->_type; }
		public function getPrix() { return $this->_prix; }
		public function getEtat() { return $this->_etat; }


		public function setId($id){
			$this->_id = (int) $id;
		}

		public function setTitre($titre){	
					$this->_titre = $titre;
			
		}
		public function setType($type){
					$this->_type = $type;
		}

		public function setPrix($prix){
				$this->_prix = $prix;
		}

		public function setEtat($etat){
					$this->_etat = $etat;
		}

}
?>