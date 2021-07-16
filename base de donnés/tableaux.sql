-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 16 juil. 2021 à 17:49
-- Version du serveur :  8.0.24
-- Version de PHP : 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tableaux`
--

-- --------------------------------------------------------

--
-- Structure de la table `etat`
--

CREATE TABLE `etat` (
  `etat` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `etat`
--

INSERT INTO `etat` (`etat`) VALUES
('en_attente'),
('en_cours'),
('termine');

-- --------------------------------------------------------

--
-- Structure de la table `exproduit`
--

CREATE TABLE `exproduit` (
  `titre` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `prix` varchar(255) NOT NULL,
  `id` int NOT NULL,
  `etat` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `exproduit`
--

INSERT INTO `exproduit` (`titre`, `type`, `prix`, `id`, `etat`) VALUES
('Oussama Ennaser', '5688- mercedes amg', '50', 76, 'en_attente'),
('Ahmed el jazouli', '7666- clio 4', '30', 77, 'en_cours');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `etat`
--
ALTER TABLE `etat`
  ADD PRIMARY KEY (`etat`),
  ADD UNIQUE KEY `etat` (`etat`);

--
-- Index pour la table `exproduit`
--
ALTER TABLE `exproduit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `etat` (`etat`) USING BTREE;

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `exproduit`
--
ALTER TABLE `exproduit`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `exproduit`
--
ALTER TABLE `exproduit`
  ADD CONSTRAINT `exproduit_ibfk_1` FOREIGN KEY (`etat`) REFERENCES `etat` (`etat`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
