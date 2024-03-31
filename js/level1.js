const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');
    
    canvas.width = 1280;
    canvas.height = 760;
    c.fillStyle = 'rgba(255, 255, 255, 0.5)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    const image = new Image();
    image.onload = function() {
        c.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
    image.src = 'assets/Level1/towerdefense1.png';
    

    const placementTiles12D = []
    for (let i = 0; i < placementTiles1.length; i+= 40) {
        placementTiles12D.push(placementTiles1.slice(i, i + 40));
        
    }
    const placementTilesArr = [];
    placementTiles12D.forEach((row, y) => {
        row.forEach((tile,x) => {
            if(tile === 201){
                placementTilesArr.push(new placementTiles({position: {x: x*32, y: y*32}}));
            }
        });
    });

    const enemies = [];
    let count = 3;
    let hearts = 2;
    let coins = 100;

    function spawnEnemy(count = 3){
        for (let i = 0; i < count; i++) {
            const xOff = i * 150;
            enemies.push(new Enemy({position : {x: 2.5*waypoints[0].x - xOff, y: 2.3*waypoints[0].y}}));
        }
    }
    spawnEnemy(count);
    
    const defenders = [];
    let activeTile = undefined;

    function animate() {
        animId = requestAnimationFrame(animate);
        c.drawImage(image, 0, 0, canvas.width, canvas.height);

        c.fillStyle = 'rgba(255, 255, 255, 0.2)';
        c.fillRect(canvas.width - 250, 10, 240, 70);

        // Draw a heart symbol
        c.fillStyle = 'red';
        c.strokeStyle = 'black';
        c.lineWidth = 2;
        c.font = '48px Arial';
        c.strokeText('\u2665', canvas.width - 120 , 60);
        c.fillText('\u2665', canvas.width - 120, 60);

        // Draw a yellow circle
        c.fillStyle = 'yellow';
        c.font = '32px Arial';
        c.beginPath();
        c.arc(canvas.width - 235, 45, 20, 0, Math.PI * 2);
        c.fillStyle = 'yellow';
        c.fill();
        c.strokeStyle = 'black';
        c.lineWidth = 2;
        c.stroke();

        // Draw a dollar sign
        c.fillStyle = 'black';
        c.font = '20px Arial';
        const dollarSignWidth = c.measureText('\u0024').width;
        const dollarSignX = canvas.width - 235 - dollarSignWidth / 2;
        c.fillText('\u0024', dollarSignX, 53);
        
        // Draw the number of coins
        c.fillStyle = 'white';
        c.font = '32px Alfa Slab One';
        c.fillText( ': ' + coins, canvas.width - 210, 60);
        c.strokeText(': ' + coins, canvas.width - 210, 60);

        // Draw the number of hearts
        c.fillStyle = 'white';
        c.font = '32px Alfa Slab One';
        c.fillText( ': ' + hearts, canvas.width - 80, 60);
        c.strokeText(': ' + hearts, canvas.width - 80, 60);

        // Add three buttons at the bottom of the canvas
        const button1 = document.createElement('button');
        button1.innerHTML = '<img src="assets/defenders/ELf/Elf_01__ATTACK_001.png" alt="Button 1" width="128" height="128">';
        button1.style.position = 'absolute';
        button1.style.left = `${canvas.width / 2 - 300}px`;
        button1.style.top = `${canvas.height + 30}px`;
        button1.style.border = 'none';
        button1.style.background = 'transparent';
        button1.style.cursor = 'pointer';
        button1.addEventListener('mouseover', () => {
            button1.style.opacity = '0.7';
        });
        button1.addEventListener('mouseout', () => {
            button1.style.opacity = '1';
        });
        canvas.parentNode.appendChild(button1);

        const button2 = document.createElement('button');
        button2.innerHTML = '<img src="assets/defenders/ELf/Elf_03__ATTACK_001.png" alt="Button 2" width="128" height="128">';
        button2.style.position = 'absolute';
        button2.style.left = `${canvas.width / 2 - 150}px`;
        button2.style.top = `${canvas.height + 30}px`;
        button2.style.border = 'none';
        button2.style.background = 'transparent';
        button2.style.cursor = 'pointer';
        button2.addEventListener('mouseover', () => {
            button2.style.opacity = '0.7';
        });
        button2.addEventListener('mouseout', () => {
            button2.style.opacity = '1';
        });
        canvas.parentNode.appendChild(button2);

        const button3 = document.createElement('button');
        button3.innerHTML = '<img src="assets/defenders/Fairy/Fairy_01__ATTACK_000.png" alt="Button 3" width="128" height="128">';
        button3.style.position = 'absolute';
        button3.style.left = `${canvas.width / 2}px`;
        button3.style.top = `${canvas.height + 30}px`;
        button3.style.border = 'none';
        button3.style.background = 'transparent';
        button3.style.cursor = 'pointer';
        button3.addEventListener('mouseover', () => {
            button3.style.opacity = '0.7';
        });
        button3.addEventListener('mouseout', () => {
            button3.style.opacity = '1';
        });
        canvas.parentNode.appendChild(button3);

        const text1 = document.createElement('p');
        text1.innerHTML = '$ 150';
        text1.style.position = 'absolute';
        text1.style.left = `${canvas.width / 2 - 250}px`;
        text1.style.top = `${canvas.height + 170}px`;
        text1.style.color = 'black';
        text1.style.fontFamily = 'Arial, sans-serif';
        text1.style.fontSize = '16px';
        text1.style.textAlign = 'center'; // Add this line to center align the text
        text1.style.background = 'rgba(255, 255, 255, 0.5)'; // Add this line to set the background color
        text1.style.padding = '10px'; // Add this line to add padding
        canvas.parentNode.appendChild(text1);

        const text2 = document.createElement('p');
        text2.innerHTML = '$ 150';
        text2.style.position = 'absolute';
        text2.style.left = `${canvas.width / 2 - 125}px`;
        text2.style.top = `${canvas.height + 170}px`;
        text2.style.color = 'black';
        text2.style.fontFamily = 'Arial, sans-serif';
        text2.style.fontSize = '16px';
        text2.style.textAlign = 'center'; // Add this line to center align the text
        text2.style.background = 'rgba(255, 255, 255, 0.5)'; // Add this line to set the background color
        text2.style.padding = '10px'; // Add this line to add padding
        canvas.parentNode.appendChild(text2);

        const text3 = document.createElement('p');
        text3.innerHTML = '$ 150';
        text3.style.position = 'absolute';
        text3.style.left = `${canvas.width / 2 + 50}px`;
        text3.style.top = `${canvas.height + 170}px`;
        text3.style.color = 'black';
        text3.style.fontFamily = 'Arial, sans-serif';
        text3.style.fontSize = '16px';
        text3.style.textAlign = 'center'; // Add this line to center align the text
        text3.style.background = 'rgba(255, 255, 255, 0.5)'; // Add this line to set the background color
        text3.style.padding = '10px'; // Add this line to add padding
        canvas.parentNode.appendChild(text3);

        for (let i = enemies.length-1 ; i >= 0;i--) {
            const enemy = enemies[i];
            enemy.update();

            if(enemy.position.x > canvas.width - enemy.width){
                enemies.splice(i, 1);
                hearts--;
                if(hearts === 0){
                   cancelAnimationFrame(animId); 
                
                const gameOverPopup = document.createElement('div');
                gameOverPopup.classList.add('game-over-popup');
                gameOverPopup.style.position = 'absolute';
                gameOverPopup.style.top = canvas.height/2 + 'px';
                gameOverPopup.style.left = canvas.width/2 + 'px';
                gameOverPopup.style.transform = 'translate(-50%, -50%)';
                gameOverPopup.style.fontSize = '48px';
                gameOverPopup.style.fontFamily = 'Alfa Slab One, serif';
                gameOverPopup.style.color = 'white';
                gameOverPopup.style.webkitTextStroke = '1px black';
                gameOverPopup.style.alignItems = 'center';
                gameOverPopup.style.textAlign = 'center';
                gameOverPopup.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                gameOverPopup.style.padding = '20px';
                gameOverPopup.innerHTML = `
                    <h1>Game Over</h1>
                    <button style="font-size: 36px; background-color: #4CAF50; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; margin: 4px 2px; cursor: pointer;" onclick="window.location.reload()">Play Again</button>
                    <button style="font-size: 36px; background-color: #f44336; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; margin: 4px 2px; cursor: pointer;" onclick="window.location.href = './index.html'">Home</button>
                `;
                canvas.parentNode.appendChild(gameOverPopup);
            }
            }
        }

        if(enemies.length === 0){
            count += 3;
            spawnEnemy(count);
        }


        placementTilesArr.forEach(placementTile => {
            placementTile.update();
        });

        defenders.forEach(defender => {
            defender.update();
            defender.target = null;

            const validTargets = enemies.filter(enemy => {
                const xDistance = enemy.center.x - defender.center.x;
                const yDistance = enemy.center.y - defender.center.y;
                const distance = Math.hypot(xDistance, yDistance);
                return distance < enemy.radius + defender.radius;

            });
            defender.target = validTargets[0];

            if(defender.target !== null){
                for(let i = defender.projectiles.length - 1; i >= 0; i--){
                    const projectile = defender.projectiles[i];
                    projectile.update();

                    if (projectile.target) {
                    const xDistance = projectile.target.center.x - projectile.position.x;
                    const yDistance = projectile.target.center.y - projectile.position.y;
                    const distance = Math.hypot(xDistance, yDistance);


                    //when projectile hits enemy
                    if(distance < projectile.target.radius+projectile.radius){
                        projectile.target.health -= 50;
                        const index = enemies.indexOf(projectile.target);
                        if (index !== -1 && projectile.target.health <= 0) {
                            enemies.splice(index, 1);
                            if(coins < 940){
                            coins += 10;
                            }
                        }
                        
                        defender.projectiles.splice(i,1);
                    }
                    
                    
                }
            }
            }

        });
    }

    const mouse = {
        x: undefined,
        y: undefined
    }

    canvas.addEventListener('click', () => {
        belowIndex = placementTilesArr.findIndex(tile => tile.position.x === activeTile.position.x && tile.position.y === activeTile.position.y+32);
        if(belowIndex != -1){
            if(placementTilesArr[belowIndex].occupied === false && activeTile && !activeTile.occupied && coins >= 50){
                defenders.push(new Defenders({position: {x: activeTile.position.x, y: activeTile.position.y}}));
                activeTile.occupied = true; 
                placementTilesArr[belowIndex].occupied = true;
                coins -= 50;
            }
        }

    });

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        activeTile = null;

        for (let i = 0; i < placementTilesArr.length; i++) {
           const tile = placementTilesArr[i]; 
              if(mouse.x > tile.position.x && mouse.x < tile.position.x + tile.size
                && mouse.y > tile.position.y && mouse.y < tile.position.y + tile.size){
                    activeTile = tile;
                 break;
                }
        }
    
    });

    
    animate();


