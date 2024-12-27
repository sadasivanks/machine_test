-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2024 at 12:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_user_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_blog_management`
--

CREATE TABLE `tb_blog_management` (
  `blog_id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `content` varchar(500) DEFAULT NULL,
  `author` varchar(500) DEFAULT NULL,
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_blog_management`
--

INSERT INTO `tb_blog_management` (`blog_id`, `title`, `content`, `author`, `id`) VALUES
(4, 'book', 'new book', 'books', 1),
(5, 'book1', 'new book', 'books', 1),
(6, 'book2', 'new book', 'books', 1),
(7, 'book3', 'new book', 'books', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tb_users`
--

CREATE TABLE `tb_users` (
  `id` int(25) NOT NULL,
  `name` varchar(25) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_users`
--

INSERT INTO `tb_users` (`id`, `name`, `email`, `password`) VALUES
(1, 'user', 'user@gmail.com', '$2b$05$s0XNPRcJC/nDvJy8ugGEUuCCbrPUB1nZF46GBti7tzeqdtixXZryW'),
(2, 'user', 'usergmailcom', '$2b$05$XIGuqz/2MpsIN7HFsgDMXuIW6yNParq3gcLQYvVRY8OHKr5G3w4Tu'),
(3, 'user', 'yyyy', '$2b$05$1lXHcBKpVVIsPpJRLgg6qeVUscXFncbgVMHrYUBaM4FAj44lR/psu'),
(4, 'user', 'user1@gmail.com', '$2b$05$rNwPM8qGYXKr1uEZAa7B4eK/76LYDQFZ4XeToM9wVbSf.84dBcIPe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_blog_management`
--
ALTER TABLE `tb_blog_management`
  ADD PRIMARY KEY (`blog_id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `tb_users`
--
ALTER TABLE `tb_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_blog_management`
--
ALTER TABLE `tb_blog_management`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tb_users`
--
ALTER TABLE `tb_users`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_blog_management`
--
ALTER TABLE `tb_blog_management`
  ADD CONSTRAINT `tb_blog_management_ibfk_1` FOREIGN KEY (`id`) REFERENCES `tb_users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
