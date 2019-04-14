const container = document.querySelector('#container');
const ctx = container.getContext('2d');
/*  关卡数据    */

const stage1 = [
	['','','','Wall','Wall','Wall','Wall','Wall','Wall','Wall'],
	['','','Wall','Wall','Ground','Ground','Wall','Ground','Ground','Wall'],
	['','','Wall','Ground','Ground','Ground','Wall','Box','Ground','Wall'],
	['','','Wall','Box','Ground','Box','Ground','Role','Ground','Wall'],
	['','','Wall','Ground','Box','Wall','Wall','Ground','Ground','Wall'],
	['Wall','Wall','Wall','Ground','Box','Ground','Wall','Ground','Wall','Wall'],
	['Wall','Target','Target','Target','Target','Target','Ground','Ground','Wall',''],
	['Wall','Wall','Wall','Wall','Wall','Wall','Wall','Wall','Wall','']
];

function play() {
	generateMap(stage1);
	//ctx.beginPath();
	//ctx.fillRect(0, 0, 1500, 1200);
}
play();


/*  地面类  */
class ground {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 50;
    }
        
}

/*  围墙类  */
class Wall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 50;
    }
}

/*  角色    */
class Role {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 50;
    }
}

/*  箱子类  */
class Box {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 50;
    }
}

/*  目标点类    */
class Target {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;
    }
}



/*	清空区域	*/
function clear() {
	ctx.clearRect(0, 0, 1500, 1200);
}

/*	绘制围墙	*/
function drawWall(x, y, size) {
	var img = new Image(size, size);
	img.onload = () => {
		var wallFill = ctx.createPattern(img, 'repeat');
		ctx.fillStyle = wallFill;
		ctx.fillRect(x * size, y * size, size, size);
	}
    img.src = "img/wall.png";

}

/*	绘制地面	*/
function drawGround(x, y, size) {
	var img = new Image(size, size);
	img.onload = () => {
		var groundFill = ctx.createPattern(img, 'repeat');
		ctx.fillStyle = groundFill;
		ctx.fillRect(x * size, y * size, size, size);
	}
    img.src = "img/ground.jpg";
}

/*	绘制箱子	*/
function drawBox(x, y, size) {
	var img = new Image(size, size);
	img.onload = () => {
		ctx.drawImage(img, x * size, y * size, size, size);
	}
    img.src = "img/box.png";
}

/*	绘制角色	*/
function drawRole(x, y, size) {
	var img = new Image(size, size);
	img.onload = () => {
		ctx.drawImage(img, x * size, y * size, size, size);
	}
    img.src = "img/role.png";
}

/*	绘制目标点	*/
function drawTarget(x, y, size) {
	var img = new Image(size - 10, size - 10);
	img.onload = () => {
		ctx.drawImage(img, x * size + 10, y * size + 10, size - 10, size - 10);
	}
    img.src = "img/target.png";
}

/*	生成地图	*/
function generateMap(stage) {
	clear();
	for(var i = 0; i < stage.length; i++) {
		for(var j = 0; j < stage[i].length; j++) {
			switch(stage[i][j]) {
				case "Ground":	drawGround(j, i, 50); break;
				case "Wall":	drawWall(j, i, 50); break;
				case "Box":		drawBox(j, i, 50); break;
				case "Target":	drawGround(j, i, 50); drawTarget(j, i, 50); break;
				case "Role":	drawGround(j, i, 50); drawRole(j, i, 50); break;
			}
		}
	}
}
