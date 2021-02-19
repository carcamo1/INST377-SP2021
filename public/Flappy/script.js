document.addEventListener('DOMContentLoaded', () => {
    const flappy = document.querySelector('.flappy')
    const display = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let flappyleft = 220
    let flappybottom = 100
    let gravity = 2
    let game_over = false
    let gap = 430

    function startGame() {
        flappybottom -= gravity
        flappy.style.bottom = flappybottom + 'px'
        flappy.style.left = flappyleft + 'px'
    }
    let gameTimerId = setInterval(startGame, 20)

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }
    function jump() {
        if (flappybottom < 500) flappybottom += 50
        flappy.style.bottom = flappybottom + 'px'
        console.log(flappybottom)
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
                obstacleLeft > 200 && obstacleLeft < 280 && flappyleft === 220 &&
                (flappybottom < obstacleBottom + 153|| flappybottom > obstacleBottom 
                    + gap -200)||
                flappybottom === 0
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