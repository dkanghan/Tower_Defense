<?php
session_start();

// If user is not logged in, redirect to login page
if (!isset($_SESSION["username"])) {
    header("Location: login.php");
    exit();
}

?>

<!DOCTYPE html>
<html lang="en">

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Workbench:SCAN@-17&display=swap"
  rel="stylesheet" />
<link rel="stylesheet" href="css/level.css">
<canvas></canvas>
<div class="def_button">
  <img id="Elf_1" src="assets/defenders/ELf/Elf_01__ATTACK_001.png" alt="">
  <p style="font-family: 'Alfa Slab One', 'Workbench', sans-serif; font-size: 24px; color: #1d6607;">50</p>
  <img id="Elf_3" src="assets/defenders/ELf/Elf_03__ATTACK_001.png" alt="">
  <p style="font-family: 'Alfa Slab One', 'Workbench', sans-serif; font-size: 24px; color: #033d88;">100</p>
  <img id="Fairy_1" src="assets/defenders/Fairy/Fairy_01__ATTACK_000.png" alt="">
  <p style="font-family: 'Alfa Slab One', 'Workbench', sans-serif; font-size: 24px; color: #441616;">150</p>
</div>

<div class="button-container">
  <div class="start_wave">
    <button id="wave" style="background-color: #ff1100;">Start Wave</button>
  </div>
</div>
<script src="js/waypoints1.js"></script>
<script src="js/placement.js"></script>
<script src="js/enemy.js"></script>
<script src="js/placementTile.js"></script>
<script src="js/defenders.js"></script>
<script src="js/projectile.js"></script>
<script src="js/sub_enemy.js"></script>
<script src="js/sub_defender.js"></script>
<script src="js/level1.js"></script>

</html>