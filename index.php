<!-- 
    index.php
    Description: Main page of the game with options to play, view user manual, and view enemies and defenders details.
    Input: User clicks on Play button, User Manual button, or tabs for Enemies and Defenders details.
    Output: Redirect to the game page, display user manual, or display enemies and defenders details.
 -->

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

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/phaser@v3.80.1/dist/phaser.min.js"></script>
    <title>Defenders of the Forest</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        #container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>

<body>
    <!-- 
        Initialize the game container with a title, play button, and user manual button.
     -->
    <div id="container">
        <div id="content">
            <h1>Defenders of the Forest</h1>
            <p>Click Play to Start Playing.</p>
            <button id="play-button">Play</button>
            <!-- 
                Add a container for the level buttons. Initially, it is hidden and will be displayed when the Play button is clicked.
             -->
            <div id="buttonContainer" style="display: none;">
                <button class="level-button" data-level="1">Level 1</button>
                <button class="level-button" data-level="2">Level 2</button>
                <button class="level-button" data-level="3">Level 3</button>
                <button class="level-button" data-level="4">Level 4</button>
            </div>
            <button id="manual-button">User Manual</button>
        </div>
    </div>

    <!-- 
        Create a popup for the user manual with details on how to play the game, enemies, and defenders.
     -->
    <div id="manualPopup" class="popup">
        <div class="popup-content">
            <span class="close">&times;</span>
            <h2>User Manual</h2>
            <p>Click on the Play button to start playing the game. You can select a level from the list of levels
                available.</p>
            <p>Each level has a different map and set of enemies. You can place defenders on the map to defend your base
                from the enemies.</p>
            <p> Place defenders on the map to defend your base from the enemies and click on the Start Wave button to
                start the wave of enemies.</p>
            <p>Enemies will appear on the left side of the screen and move towards the right side. You can place
                defenders on the screen to attack the enemies.</p>
            <p>Defenders will attack the enemies automatically when they are in range. You can place defenders by
                clicking on the defender icons at the bottom of the screen and then clicking on the desired location on
                the screen.</p>
            <p> You can upgrade defenders by clicking on the upgrade button to upgrade your defender. Upgrading a
                defender will increase its attack power and range. 1st upgrade cost 25 coins (increses attack by 20) and
                2nd upgrade cost 50 coins(increases range by 10%).</p>
            <p> You can remove defenders by clicking on the remove button and then clicking on the defender you want to
                remove.You will receive 50% of the cost back.</p>
            <p>Defenders have different attack powers, range and costs. You can view the details of the enemies and
                defenders
                in the Enemies and Defenders tabs below.</p>
            <p>Defend your base and defeat all the enemies to win the game!</p>
            <h3>Enemies and Defenders</h3>
            <!-- 
                Create tabs for Enemies and Defenders details.
             -->
            <div class="tab">
                <button class="tablinks" onclick="openTab(event, 'enemies')">Enemies</button>
                <button class="tablinks" onclick="openTab(event, 'defenders')">Defenders</button>
            </div>

            <div>&nbsp;</div>
            <div id="enemies" class="tabcontent" style="display: none; ">
                <h3>Enemies</h3>
                <table class="center-align">
                    <thead>
                        <tr>
                            <th>Enemies</th>
                            <th>Health</th>
                            <th>Coins Gained</th>
                            <th>Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="assets/attackers/Orcs/ORK1/WALK_000.png" alt="" width="50" height="50"></td>
                            <td>100</td>
                            <td>10</td>
                            <td>1.5</td>
                        </tr>
                        <tr>
                            <td><img src="assets/attackers/Orcs/ORK2/WALK_000.png" alt="" width="50" height="50"></td>
                            <td>150</td>
                            <td>20</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td><img src="assets/attackers/Orcs/ORK3/WALK_000.png" alt="" width="50" height="50"></td>
                            <td>200</td>
                            <td>30</td>
                            <td>1.5</td>
                        </tr>
                        <tr>
                            <td><img src="assets/attackers/Knight/KNIGHT1/_WALK_000.png" alt="" width="50" height="50">
                            </td>
                            <td>100</td>
                            <td>10</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td><img src="assets/attackers/Knight/KNIGHT2/_WALK_000.png" alt="" width="50" height="50">
                            </td>
                            <td>150</td>
                            <td>15</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td><img src="assets/attackers/Knight/KNIGHT3/_WALK_000.png" alt="" width="50" height="50">
                            </td>
                            <td>350</td>
                            <td>20</td>
                            <td>2.5</td>
                        </tr>
                        <tr>
                            <td><img src="assets/attackers/Trolls/TROLL1/Troll_01_1_WALK_000.png" alt="" width="50"
                                    height="50"></td>
                            <td>200</td>
                            <td>10</td>
                            <td>2.5</td>
                        </tr>
                        <tr>
                            <td><img src="assets/attackers/Trolls/TROLL2/Troll_02_1_WALK_000.png" alt="" width="50"
                                    height="50"></td>
                            <td>300</td>
                            <td>20</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td><img src="assets/attackers/Trolls/TROLL3/Troll_03_1_WALK_000.png" alt="" width="50"
                                    height="50"></td>
                            <td>400</td>
                            <td>25</td>
                            <td>2.2</td>
                        </tr>
                        <tr>
                            <td><img src="assets/attackers/Golem/Golem-2/0_Golem_Walking_000.png" alt="" width="50"
                                    height="50"></td>
                            <td>1200</td>
                            <td>N/A</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td><img src="assets/attackers/Golem/Golem-3/0_Golem_Walking_000.png" alt="" width="50"
                                    height="50"></td>
                            <td>1500</td>
                            <td>N/A</td>
                            <td>2.5</td>
                    </tbody>
                </table>
            </div>
            <div id="defenders" class="tabcontent" style="display: none;">
                <h3>Defenders</h3>
                <table class="center-align">
                    <thead>
                        <tr>
                            <th>Defenders</th>
                            <th>Attack Power</th>
                            <th>Range</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="assets/defenders/ELf/Elf_01__ATTACK_001.png" alt="" width="50" height="50">
                            </td>
                            <td>50</td>
                            <td>250</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><img src="assets/defenders/ELf/Elf_03__ATTACK_001.png" alt="" width="50" height="50">
                            </td>
                            <td>75</td>
                            <td>250</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td><img src="assets/defenders/Fairy/Fairy_01__ATTACK_000.png" alt="" width="50"
                                    height="50"></td>
                            <td>150</td>
                            <td>200</td>
                            <td>150/350</td>
                        </tr>
                        <tr>
                            <td><img src="assets/defenders/Warrior/Warrior_03__ATTACK_000.png" alt="" width="50"
                                    height="50"></td>
                            <td>50</td>
                            <td>250</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><img src="assets/defenders/Fairy/Fairy_02__ATTACK_000.png" alt="" width="50"
                                    height="50"></td>
                            <td>100</td>
                            <td>225</td>
                            <td>350/150</td>
                        </tr>
                        <tr>
                            <td><img src="assets/defenders/Fairy/Fairy_03__ATTACK_000.png" alt="" width="50"
                                    height="50"></td>
                            <td>80</td>
                            <td>250</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script src="js/prefetch.js"></script>

    <script>

        // Function to switch between Enemies and Defenders tabs
        // Input : Event, Tab Name
        // Output : Display the selected tab and hide the other tab
        function openTab(event, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            event.currentTarget.className += " active";
        }

        // Function to toggle the display of the popup
        function togglePopup() {
            var popup = document.getElementById('manualPopup');
            popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
        }

        // Display the level buttons when the "Play" button is clicked
        // Hide the "Play" and "User Manual" buttons
        document.getElementById('play-button').addEventListener('click', function () {
            document.getElementById('play-button').style.display = 'none';
            document.getElementById('manual-button').style.display = 'none';
            document.getElementById('buttonContainer').style.display = 'flex';

        });

        // Redirect to the selected level page when a level button is clicked
        document.getElementById('buttonContainer').addEventListener('click', function (event) {
            if (event.target.classList.contains('level-button')) {
                var level = event.target.dataset.level;
                window.location.href = 'level' + level + '.php';
            }
        });

        // Show the user manual popup when the button is clicked
        document.getElementById('manual-button').addEventListener('click', function () {
            togglePopup();
        });

        // Close the popup when the close button is clicked
        document.getElementsByClassName('close')[0].addEventListener('click', function () {
            togglePopup();
        });

        // Close the popup when clicking outside of it
        window.onclick = function (event) {
            var popup = document.getElementById('manualPopup');
            if (event.target === popup) {
                togglePopup();
            }
        };
    </script>


</body>

</html>