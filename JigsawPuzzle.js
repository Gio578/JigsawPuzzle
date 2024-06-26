document.addEventListener('DOMContentLoaded', function() {
    puzzleNumber = Math.floor(Math.random() * 3) + 1
    generatePuzzle(puzzleNumber)
})

function generatePuzzle(puzzleNumber) {
    puzzlePieces = document.getElementById('puzzle-pieces')
    puzzlePieces.innerHTML = ''

    path = `329EHW11.images/puzzle${puzzleNumber}/img${puzzleNumber}-`

    for (i = 1; i <= 12; i++) {
        img = document.createElement('img')
        img.src = `${path}${i}.jpg`
        img.className = 'puzzle-piece'
        img.style.position = 'absolute'
        puzzlePieces.appendChild(img)
        img.onmousedown = grabber
    }

    setTimeout(randomPuzzlePositions, 0)
}

function randomPuzzlePositions() {
    pieces = document.querySelectorAll('.puzzle-piece')
    pieces.forEach(function(piece) {
        rangeX = 500
        rangeY = 300
        randomX = Math.floor(Math.random() * rangeX) + 400
        randomY = Math.floor(Math.random() * rangeY) + 400

        piece.style.left = `${randomX}px`
        piece.style.top = `${randomY}px`
    })
}

function grabber(event) {

    let eventTarget = event.currentTarget
 
    let posX = parseInt(eventTarget.style.left, 10)
    let posY = parseInt(eventTarget.style.top, 10)
 
    let diffX = event.clientX - posX
    let diffY = event.clientY - posY

    document.addEventListener("mousemove", mover, true)
    document.addEventListener("mouseup", dropper, true)

    function mover(event) {
        eventTarget.style.left = (event.clientX - diffX) + 'px'
        eventTarget.style.top = (event.clientY - diffY) + 'px'
    }
 
    function dropper(event) {
        document.removeEventListener('mousemove', mover, true)
        document.removeEventListener('mouseup', dropper, true)
    }
 
    document.addEventListener('mousemove', mover, true)
    document.addEventListener('mouseup', dropper, true)
}