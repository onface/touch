var Touch = require('face-touch')
var boxNode = document.getElementById('box')
var moveX = new Touch({})
var moveY = new Touch({})
moveX.on('action', function (mount) {
    let key = 'left'
    let nowValue = parseFloat(boxNode.style[key])
    if (isNaN(nowValue)) { nowValue = 0 }
    boxNode.style[key] = nowValue + mount + 'px'
})
moveY.on('action', function (mount) {
    let key = 'top'
    let nowValue = parseFloat(boxNode.style[key])
    if (isNaN(nowValue)) { nowValue = 0 }
    boxNode.style[key] = nowValue + mount + 'px'
})
function boxMouseUp (e) {
    moveX.end(e.clientX)
    moveY.end(e.clientY)
    document.removeEventListener('mouseup', boxMouseUp)
    document.removeEventListener('mousemove', boxMousemove)
}
function boxMousemove (e) {
    e.preventDefault()
    moveX.move(e.clientX)
    moveY.move(e.clientY)
}
boxNode.addEventListener('mousedown', function (e) {
    moveX.start(e.clientX)
    moveY.start(e.clientY)
    document.addEventListener('mouseup', boxMouseUp)
    document.addEventListener('mousemove', boxMousemove)
    e.preventDefault()
})
