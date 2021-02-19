document.addEventListener('DOMContentLoaded', () => {
    const flap = document.querySelector('.flap')
    const display = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let flapleft = 220
    let flapbottom = 100
    let gravity = 2
    let game_over = false
    let gap = 430

    function startGame() {
        flapbottom -= gravity
        flap.style.bottom = flapbottom + 'px'
        flap.style.left = flapleft + 'px'
    }
    let gameTimerId = setInterval(startGame, 20)

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }
    function jump() {
        if (flapbottom < 500) flapbottom += 50
        flap.style.bottom = flapbottom + 'px'
        console.log(flapbottom)
    }
    document.addEventListener('keyup', control)
    function generateObstacle() {
        let obstacleLeft = 500
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')
        if (!game_over) {
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
        } 
        display.appendChild(obstacle)
        display.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.bottom = obstacleBottom + gap + 'px'

        function moveObstacle() {
            obstacleLeft -=2
            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'
            if (obstacleLeft === -60) {
                clearInterval(timerId)
                display.removeChild(obstacle)
                display.removeChild(topObstacle)
            }
            if (
                obstacleLeft > 200 && obstacleLeft < 280 && flapleft === 220 &&
                (flapbottom < obstacleBottom + 153|| flapbottom > obstacleBottom 
                    + gap -200)||
                flapbottom === 0
                ) {
                gameOver()
                clearInterval(timerId)
            }
        }
        let timerId = setInterval(moveObstacle, 20)
        if (!game_over) setTimeout(generateObstacle, 3000)
    }
    generateObstacle()
    function gameOver() {
        clearInterval(gameTimerId)
        console.log('game over')
        game_over = true
        document.removeEventListener('keyup', control)
    }

})