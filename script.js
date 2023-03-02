let currentColor = 'black';
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownF)
screen.addEventListener('mousemove', mouseMoveF)
screen.addEventListener('mouseup', mouseUpF)

function colorClickEvent(e) {
    let color = e.target.getAttribute("data-color")
    currentColor = color

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active')
}
function mouseDownF(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;

}
function mouseMoveF(e) {
    if (canDraw) {
        Draw(e.pageX, e.pageY)
    }
}
function mouseUpF() {
    canDraw = false;
}
function Draw(x, y) {
    pointX = x - screen.offsetLeft;
    pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}
function clearscreen() {
    ctx.clearRect(0, 0, screen.width, screen.height);
}
