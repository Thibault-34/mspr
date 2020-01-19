-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  Dim 19 jan. 2020 à 21:57
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mspr_bdd`
--

-- --------------------------------------------------------

--
-- Structure de la table `artist`
--

DROP TABLE IF EXISTS `artist`;
CREATE TABLE IF NOT EXISTS `artist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `style` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `instagram` varchar(255) NOT NULL,
  `spotify` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `artist`
--

INSERT INTO `artist` (`id`, `name`, `style`, `image`, `description`, `facebook`, `instagram`, `spotify`) VALUES
(3, 'Hocus Pocus', 'Rap', 'none', 'Groupe de Rap Français Old School, vachement cool', 'Lien vers Facebook d\'Hocus Pocus', 'Lien vers Instagram d\'Hocus Pocus', 'Lien vers Spotify d\'Hocus Pocus'),
(4, 'Synapson', 'Electro', 'undefined', 'Super groupe electro frenchie', 'page fb', 'page insta', 'page spotify');

-- --------------------------------------------------------

--
-- Structure de la table `categoryofpointinterest`
--

DROP TABLE IF EXISTS `categoryofpointinterest`;
CREATE TABLE IF NOT EXISTS `categoryofpointinterest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `icon` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `categoryofpointinterest`
--

INSERT INTO `categoryofpointinterest` (`id`, `category`, `icon`) VALUES
(1, 'sanitaires', ''),
(2, 'loisir', '');

-- --------------------------------------------------------

--
-- Structure de la table `event`
--

DROP TABLE IF EXISTS `event`;
CREATE TABLE IF NOT EXISTS `event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `schedule` time NOT NULL,
  `artiste_id` int(11) NOT NULL,
  `scene_id` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Artiste_Event` (`artiste_id`),
  KEY `scene_id` (`scene_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `event`
--

INSERT INTO `event` (`id`, `date`, `schedule`, `artiste_id`, `scene_id`) VALUES
(3, '2019-12-20', '12:00:00', 3, 2);

-- --------------------------------------------------------

--
-- Structure de la table `localisation`
--

DROP TABLE IF EXISTS `localisation`;
CREATE TABLE IF NOT EXISTS `localisation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `localisation`
--

INSERT INTO `localisation` (`id`, `longitude`, `latitude`) VALUES
(1, 3.87672, 43.6108),
(2, 3.75672, 45.6108);

-- --------------------------------------------------------

--
-- Structure de la table `page`
--

DROP TABLE IF EXISTS `page`;
CREATE TABLE IF NOT EXISTS `page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(2500) NOT NULL,
  `title` varchar(50) NOT NULL,
  `image` varchar(2500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `page`
--

INSERT INTO `page` (`id`, `content`, `title`, `image`) VALUES
(1, 'Le Festival d\'Avignon, c\'est...\r\nFondé en 1947 par Jean Vilar, le Festival d\'Avignon est l\'une des plus importantes manifestations internationales du spectacle vivant contemporain. Chaque année, en juillet, le Festival transforme la ville en théâtre accueillant des dizaines de milliers d\'amoureux du spectacle vivant, de toutes origines et générations. Au sein d\'un patrimoine exceptionnel dont le Palais des papes, le Festival produit et diffuse une soixantaine de spectacles, mais aussi des lectures, des expositions, des films et de nombreux débats.\r\n\r\nLe Festival d\'Avignon ce n\'est pas...\r\nLe OFF : http://www.avignonleoff.com/\r\n\r\nQuelques chiffres ?\r\n3 semaines de Festival, ce sont 40 lieux, 60 pièces (plus de 200 levers de rideau) et avec les débats, rencontres, projections, plus de 400 rendez-vous pour un total de 155 000 entrées (payantes et gratuites), soit un taux moyen de fréquentation de 95 %.\r\n\r\nPour mettre en oeuvre le Festival, 33 salariés permanents travaillent à l\'année accompagnés par 750 CDD (techniciens, artistes, agents d\'accueil, agents administratifs, etc). Avec les équipes artistiques accueillies, c\'est 1 700 emplois générés et près de 50 000 jours de travail hors équipe permanente.\r\n\r\nToute l\'année, 800 heures d\'interventions artistiques réunissent 5 000 élèves, 140 classes, 77 établissements scolaires, 18 villes, et 1 700 personnes bénéficient de visites du Festival.\r\n\r\nLe budget est de 13 millions d\'euros, dont 57 % subventions publiques et 43 % recettes propres (vente de spectacles, activités de coproduction, mécénat et partenariats, billetterie).\r\n\r\nLe Festival est donc à la fois un levier de croissance et un redistributeur.\r\n\r\nLa notoriété du Festival, c\'est aussi une présence importante du secteur professionnel français et étranger (12 % du public), 600 journalistes accrédités (520 interviews en presse écrite, audiovisuelle et web, 200 plateaux, interviews et sujets en radio, 35 équipes TV, 112 tournages, 44 photographes). Le site compte plus de 4 millions de pages vues par an et plus de 1000 photos et 200 vidéos sont ajoutées lors de chaque édition.\r\n\r\nLa programmation du Festival d\'Avignon déclenche un nombre important de tournées. Suite à la 72e édition, 36 spectacles de la programmation ont joué plus de 958 fois dans 26 pays différents, soit un total de 210 villes différentes, dont 143 françaises et 67 étrangères.', 'Informations', ''),
(2, '© Festival d\'Avignon\r\n\r\nL\'ensemble des textes, vidéos, photographies et documents sonores publiés sur ce site sont la propriété du Festival d\'Avignon ou d\'un tiers dont il a été obtenu les droits d\'exploitation. Ils ne peuvent donc être utilisés sans autorisation préalable.\r\n\r\nToute représentation ou reproduction intégrale ou partielle, faite sans consentement de l\'auteur ou de ses ayants droit, est illicite (art. L 122-4 du Code de la Propriété Intellectuelle).\r\n\r\nConformément à la loi n°78-17 du 6/1/78 relative à l\'informatique, aux fichiers et aux libertés modifiée par la loi du 6/8/04, et à la loi du 21/6/04 pour la confiance dans l\'économie numérique, vous disposez d\'un droit d\'accès, de rectification et de suppression des informations vous concernant. Vous avez aussi la possibilité de vous opposer à la réception d\'informations et/ou d\'offres commerciales et à l\'utilisation de vos coordonnées électroniques à des fins de prospection. Vous pouvez exercer vos droits auprès du Festival d\'Avignon par courriel en cliquant ici', 'Mentions légales', '');

-- --------------------------------------------------------

--
-- Structure de la table `pointinterest`
--

DROP TABLE IF EXISTS `pointinterest`;
CREATE TABLE IF NOT EXISTS `pointinterest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `localisation_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_PointInterest_Localisation` (`localisation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `pointinterest`
--

INSERT INTO `pointinterest` (`id`, `name`, `localisation_id`) VALUES
(9, 'toilettes', 1),
(10, 'snack', 2);

-- --------------------------------------------------------

--
-- Structure de la table `pointinteresttocategory`
--

DROP TABLE IF EXISTS `pointinteresttocategory`;
CREATE TABLE IF NOT EXISTS `pointinteresttocategory` (
  `category_id` int(11) NOT NULL,
  `point_interest_id` int(11) NOT NULL,
  PRIMARY KEY (`category_id`,`point_interest_id`),
  KEY `FK_InterestPoint_Category` (`point_interest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `pointinteresttocategory`
--

INSERT INTO `pointinteresttocategory` (`category_id`, `point_interest_id`) VALUES
(1, 9),
(2, 10);

-- --------------------------------------------------------

--
-- Structure de la table `scene`
--

DROP TABLE IF EXISTS `scene`;
CREATE TABLE IF NOT EXISTS `scene` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `localisation_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Localisation_Scene` (`localisation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `scene`
--

INSERT INTO `scene` (`id`, `name`, `localisation_id`) VALUES
(1, 'scene electro', 1),
(2, 'scene rap', 2);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `admin`) VALUES
(1, 'user@domain.com', 'azerty', 1),
(2, 'festivalier@domain.com', 'azerty154', 0);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `FK_Artiste_Event` FOREIGN KEY (`artiste_id`) REFERENCES `artist` (`id`),
  ADD CONSTRAINT `Scene_of-event` FOREIGN KEY (`scene_id`) REFERENCES `scene` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT;

--
-- Contraintes pour la table `pointinterest`
--
ALTER TABLE `pointinterest`
  ADD CONSTRAINT `FK_PointInterest_Localisation` FOREIGN KEY (`localisation_id`) REFERENCES `localisation` (`id`);

--
-- Contraintes pour la table `pointinteresttocategory`
--
ALTER TABLE `pointinteresttocategory`
  ADD CONSTRAINT `FK_Category_InterestPoint` FOREIGN KEY (`category_id`) REFERENCES `categoryofpointinterest` (`id`),
  ADD CONSTRAINT `FK_InterestPoint_Category` FOREIGN KEY (`point_interest_id`) REFERENCES `pointinterest` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
