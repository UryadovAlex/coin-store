-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: bootcamp
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `qty` int NOT NULL,
  `userId` int NOT NULL,
  `coinId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (28,1,16,16),(31,1,16,19),(35,1,16,15),(36,2,16,25),(38,2,16,22);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coins`
--

DROP TABLE IF EXISTS `coins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `value` varchar(45) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `metal` varchar(45) DEFAULT NULL,
  `shortDescription` tinytext,
  `fullDescription` text,
  `quality` varchar(45) DEFAULT NULL,
  `weight` decimal(19,4) DEFAULT NULL,
  `obverseLink` varchar(255) DEFAULT NULL,
  `reverseLink` varchar(255) DEFAULT NULL,
  `coinType` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coins`
--

LOCK TABLES `coins` WRITE;
/*!40000 ALTER TABLE `coins` DISABLE KEYS */;
INSERT INTO `coins` VALUES (1,'Canadian Beaver','5 cents',1965,40,'CANADA','nickel','Canadian beaver\". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.\"','In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D ú G ú REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.','BU',4.5400,'158980614699325 cents_1.png','158980614700025 cents_2.png','memorial'),(2,'Looney','1 dollar',1970,65,'CANADA','gold','Looney\". Unique coin with the image of a goat. Canadian dollar symbol.\"','The reverse of the coin depicts a black goat - a symbol of Canada and an inscription divided into the lower and upper semicircle Canadian dollar\".\"','BU',5.4000,'1589806209693Botswana_1.png','1589806209716Botswana_2.png','memorial'),(3,'Jefferson','5 cents',1966,35,'UNITED STATES OF AMERICA','nickel','Unique coin featuring Thomas Jefferson, the 3rd American president. Face value - 5 cents.','The obverse of the coin depicts a bust of the 3rd American president, Thomas Jefferson. The inscription on the right semicircle IN GOD WE TRUST\". Below is the inscription ?FREEDOM? and the year of minting. Under the image of Jefferson was a monogram of an engraver. The initials of the engraver FS first appeared on coins in 1966.\"','BU',3.5400,'1589890565339A penny_1.png','1589890565350A penny_2.png','memorial'),(4,'Kennedy','0.5 dollar',1963,43,'UNITED STATES OF AMERICA','nickel','The unique coin is made in honor of the assassination of the 35th president of Texas.','On November 22, 1963, in connection with the assassination of the 35th President John F. Kennedy in Dallas (Texas), it was decided to perpetuate the memory of President Kennedy on a coin.','BU',4.3000,'1589806229410Canadian Beaver_1.png','1589806229430Canadian Beaver_2.png','memorial'),(5,'Canadian Cent','1 cent',1965,8,'CANADA','Steel','Canadian cent.\" A unique coin with the image of maple leaves - symbols of Canada. Face value - 1 cent.\"','On May 3, 2012, the Department of the Treasury of Canada announced the cessation of production of a 1 cent coin. The latest issues of the famous 1-cent maple leaf were minted in 2012.','BU',2.7000,'1589806182447Alligator_1.png','1589806182455Alligatorv_2.png','memorial'),(6,'A penny','1 cent',1793,8,'UNITED STATES OF AMERICA','Steel','A penny\". A unique coin with a shield image with 13 vertical stripes\"','Minted from 1793 to the present day.','BU',5.1000,'1589806249338Canadian Cent_1.png','1589806249342Canadian Cent_2.png','memorial'),(7,'25 cents','25 cents',1966,80,'CANADA','nickel','Unique coin depicting a caribou (reindeer). The face value of the coin is equal to a quarter of the Canadian dollar.','The obverse depicts Queen Elizabeth II. The caribou (reindeer) is depicted on the reverse.','BU',5.7000,'1589806194140Bolivian Peso_1.png','1589806194164Bolivian Peso_2.png','memorial'),(8,'Dim Sum','10 cents',1946,10,'UNITED STATES OF AMERICA','nickel','Dim Sum is a 10-cent coin of the United States that has been minted from 1946 to the present. This is a unique coin with the image of a torch, oak and olive branches.','The obverse of the coin depicts a portrait of the 32nd President of the United States, Franklin D. Roosevelt, and the reverse depicts a torch, oak and olive branches above the motto ?E pluribus unum? - ?Out of many.?','BU',4.2500,'1589806268778Coin of the Weimar Republic_1.png','1589806268785Coin of the Weimar Republic_2.png','memorial'),(9,'South Vietnamese Dong','1 dong',1955,56,'the Republic of Vietnam','nickel','Currency of the Republic of Vietnam in 1955-1975 Coin with the image of wheat.','Currency of the Republic of Vietnam in 1955-1975.','BU',5.0500,'1589806577459Rial_1.png','1589806577467Rial_2.png','invested'),(10,'The British Antelope','0.5 pound',1952,78,'British South Africa','gold','Unique coin depicting an antelope. British South African gold coin with a face value of 1/2 pound. It has been produced since 1952.','On one side of the coin is the head of King George VI, turned to the left. Also at the top in a semicircle is the inscription GEORGIVS SEXTVS REX.','BU',6.3000,'1589806675533The British Antelope_1.png','1589806675541The British Antelope_2.png','invested'),(12,'Stork','2 francs',1997,54,'France','steel','Unique coin with the image of a flying stork. French coin at 2 two francs 1997.','Two francs by Georges Gynemer - a commemorative coin of two French francs, issued in 1997 in honor of the famous pilot of the First World War, Georges Gynemer, on the occasion of the 80th anniversary of the officer cross of the Legion of Honor and his death: shot down in flight by a German plane.','BU',6.5700,'1589806596729Sailboat_1.png','1589806596737Sailboat_2.png','invested'),(13,'Gyeonggi','1 dollar',1984,97,'Australia','gold','Gyeonggi\". Coin with the image of five kangaroos - symbols of Australia.\"','The first Australian coin with a nominal value of 1 dollar was introduced on May 13, 1984 to replace a one-dollar banknote.','BU',4.7600,'1589806708094The Golden Panda_1.png','1589806708106The Golden Panda_2.png','invested'),(14,'Bolivian Peso','1 PESO',1988,54,'Bolivia','steel','Boliviano Coin with the image of Bolivia','By 1987, the Bolivian peso had completely depreciated and was replaced by a new boliviano during another monetary reform.','BU',3.6200,'1589806614534Scientist_1.png','1589806614542Scientist_2.png','invested'),(15,'Botswana','1 thebe',1976,62,'Botswana','steel','Botswana\". Coin with the image of a bird.\"','Coin of state of Botswana 1976.','BU',4.2800,'1589806724320Theobroma Cocoa_1.png','1589806724330Theobroma Cocoa_2.png','invested'),(16,'Virginia','5 dollars',2014,108,'British Virgin Islands','nickel','Virginia Coin with the image of a seahorse. Coin created during the reign of Elizabeth II.','The obverse depicts Her Majesty Queen Elizabeth II. At the top of the coin is the inscription British Virgin Islands Queen Elizabeth II 2014.','BU',6.9800,'1589806631456South Vietnamese Dong_1.png','1589806631466South Vietnamese Dong_2.png','invested'),(17,'Theobroma Cocoa','20 pesewas',1962,54,'Ghana','steel','Coin with a lion in the center of the shield. Ghana coin, published in 1967.','The reverse depicts a runaway lion in the center of a shield divided into four parts, separating the date and the face value. The inscription at the top of the coin is TWENTY','BU',4.7600,'1589806741617Virginia_1.png','1589806741624Virginia_2.png','invested'),(18,'Coin of the Weimar Republic','5 Mark',1927,142,'the Weimar Republic','silver','The Hindenburg Coin with the coat of arms of the Weimar Republic.','On the obverse, in the center of the coin, at the top is the coat of arms of the Weimar Republic. In the center below is the coat of arms of the Hindenburg family. This is a shield divided into 4 fields - in the upper left and lower right corners there is a head of a bull.','BU',4.7600,'1589806649031Stork_1.png','1589806649037Stork_2.png','invested'),(19,'Scientist','1 pound',1981,112,'Egypt','silver','Silver Egyptian coin with the image of the god Thoth. Silver Egyptian coin.','Face value one pound. It has been produced since 1981.','BU',3.9500,'1589806758099Woman_1.png','1589806758105Woman_2.png','invested'),(20,'Lion sedge','1 rupee',1975,76,'India','steel','Indian coin with the image of a lion Ashoka. Face value 1 one rupee. 1975 edition.','It depicts the lion Ashok on his pedestal. It is surrounded by the inscription of the name of the country in two languages, meaning and date, surrounded by stylized stalks of grain.','BU',4.9500,'1589806291828Costa Rica_1.png','1589806291835Costa Rica_2.png','undefined'),(21,'Rial','5000 dinars',1928,98,'Iran','silver','Iranian silver coin with the image of a lion. Face value 5000 five thousand dinars (5 five taps). 1928 year.','It depicts a bust of Reza Shah, whose head is turned to the right.','BU',6.1200,'158987684881625 cents_1.png','1589876848822Alligatorv_2.png','undefined'),(22,'ISK','1 Icelandic krona',2007,78,'Iceland','nickel','Icelandic coin with a picture of a fish. Face value 1 Icelandic krona','Initially, the krone consisted of 100 Eire (ISL. EYRIR, MN. CH. ISL. Aurar), but since January 1, 1995 Eire has not been used in monetary circulation.','BU',5.4200,'158987688743825 cents_1.png','1589876887443Botswana_2.png','exclusive'),(23,'Yemen','25 fils',1964,69,'Yemen','nickel','Coin of South Arabia (Yemen) with the image of a viral boat. Coin in 25 twenty five fils.','An octagonal star with dots is depicted on one side of the coin.','BU',0.4700,'1589806369333Dim Sum_1.png','1589806369338Dim Sum_2.png','exclusive'),(24,'Woman','1 yuan',1986,48,'China','nickel','1 yuan Chinese coin with a picture of a woman. 1986 edition.','On one side of the coin is a woman sitting on a stone. Doves fly around her','BU',6.0200,'1589806476323Kennedy_1.png','1589806476329Kennedy_2.png','exclusive'),(25,'Alligator','5 yuan',1998,78,'China','nickel','Chinese coin with the image of an alligator. 5 yuan Chinese coin. 1998 edition.','It depicts a Chinese alligator on the banks of the river.','BU',7.2400,'1589806387361Franc_1.png','1589806387368Franc_2.png','exclusive'),(26,'The Golden Panda','5 yuan',1993,82,'China','nickel','Chinese coin with the image of two pandas. 5 yuan Chinese coin. 1993 edition.','On one side of the coin are two pandas. At the top of the coin are Chinese characters in an arc.','BU',7.2400,'1589806505220Lion sedge_1.png','1589806505227Lion sedge_2.png','exclusive'),(27,'Costa Rica','100 columns',1974,78,'Costa Rica','nickel','Costa - African coin with the image of manatee. Costa Rican coin of 100 columns. It has been produced since 1974.','On one side of the coin is a shield with a sailing ship in front of the mountains. Below is the release date of the coin.','BU',5.2400,'1589806407604Gyeonggi_1.png','1589806407610Gyeonggi_2.png','exclusive'),(28,'Year of the children','100 columns',1979,72,'Costa Rica','nickel','Costa is an African coin depicting three chicks in a nest. Costa Rican coin of 100 columns. It has been produced since 1979.','On one side of the coin are 3 chicks in a nest, symbolizing the International Year of Children.','BU',5.2400,'1589806525062Looney_1.png','1589806525075Looney_2.png','exclusive'),(29,'Sailboat','5 escudos',1933,134,'Portugal','silver','Portuguese silver coin with the image of a sailing ship.','Portuguese silver coin in 5 five escudos. It has been produced since 1933.','BU',4.4000,'1589806433640ISK_1.png','1589806433650ISK_2.png','exclusive');
/*!40000 ALTER TABLE `coins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `gender` enum('f','m') NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (16,'Alex','Uryadov','m','uryadov@gmail.com','$2b$10$Fo53EQw0lU6yv17/8zQpRevboMMl5n5LPjGqcaJmY16pgZTJHxRyC',0),(19,'Aleksandr','Uryadov','m','dddd','$2b$10$uXf6h0bWQbwjhBdOB2k4oemFKX7eR/8RRS0wtbhN/pe0NxHBKSByO',0),(23,'Aleksandr','Uryadov','m','sdfdsfsdfsssss','$2b$10$v7dKglejxCbss0R/kk9kJeS6qljDoHnIQ0LMRy1EQ.KadNxD83UxC',0),(24,'Aleksandr','Uryadov','m','alex@gmail.com','$2b$10$JfVFOJSZx63wkPKDhiW//u0uO1gthodx5YC5NZKW3Q6EjuxsKJk4W',0),(29,'Aleksandr','Uryadov','m','uryadov212@gmail.com','$2b$10$G85PVqhDFL6s.F30e2eHSu8O047N02tFvLj6fij5WdYabuC.q0viO',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-24 20:37:05
