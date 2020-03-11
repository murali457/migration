-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2019 at 03:21 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dass_test_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `childerns`
--

CREATE TABLE `childerns` (
  `id` int(11) NOT NULL,
  `fol_user_id` int(11) NOT NULL,
  `children_name` varchar(250) NOT NULL,
  `class` varchar(250) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `childerns`
--

INSERT INTO `childerns` (`id`, `fol_user_id`, `children_name`, `class`, `age`, `gender`) VALUES
(1, 2, 'children1', 'second class', 6, 'male'),
(2, 2, 'children2', 'seventh class', 12, 'female');

-- --------------------------------------------------------

--
-- Table structure for table `folder_str_user`
--

CREATE TABLE `folder_str_user` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `folder_str_user`
--

INSERT INTO `folder_str_user` (`id`, `name`, `email`, `password`) VALUES
(1, 'dass', 'dass@gmail.com', '$2b$10$atlJ4lpBRAJrrdF2ZjvWUOlG9NdkIYVoWx5j43fYlqRYHfZgCDPpW'),
(2, 'dassss', 'dassanenenu@gmail.com', 'dass@133');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `childerns`
--
ALTER TABLE `childerns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `folder_str_user`
--
ALTER TABLE `folder_str_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `childerns`
--
ALTER TABLE `childerns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `folder_str_user`
--
ALTER TABLE `folder_str_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
