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

/*  关卡数据    */

var stage1 = [
	['','','','Wall','Wall','Wall','Wall','Wall','Wall','Wall'],
	['','','Wall','Wall','Ground','Ground','Wall','Ground','Ground','Ground'],
	['','','Wall','Ground','Ground','Ground','Wall','Box','Ground','Wall'],
	['','','Wall','Box','Ground','Box','Ground','Ground','Role','Ground','Wall'],
	['','','Wall','Ground','Box','Wall','Wall','Ground','Ground','Wall'],
	['Wall','Wall','Wall','Ground','Box','Ground','Wall','Ground','Wall','Wall'],
	['Wall','Target','Target','Target','Target','Target','Ground','Ground','Wall',''],
	['Wall','Wall','Wall','Wall','Wall','Wall','Wall','Wall','Wall','']
];
