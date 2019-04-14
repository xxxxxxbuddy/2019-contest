function drawWall(ctx, x, y, size) {
    ctx.beginPath();
    var img = document.createElement('img');
    img.src = "wall.png";
    var wallFill = ctx.createPattern(img, 'repeat');
    ctx.strokeStyle = wallFill;
    ctx.fillStyle = wallFill;
    ctx.fillRect(0, 0, 1500, 1200);
}
module.exports = {
    drawWall: drawWall
}