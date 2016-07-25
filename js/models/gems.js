/**
 * Created by kumardivyarajat on 25/07/16.
 */
var Gem = function (index) {
    this.reset();
    this.sprite = getGemSprite(index);
};

Gem.prototype.reset = function () {
    this.x = constraints.gemsInit.x;
    this.y = constraints.gemsInit.y;
};

Gem.prototype.update = function (x) {
    this.x = (101 * x);
    this.y = 40;
};

Gem.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 101, 83);
};


var OrangeGem = function () {
    this.points = constraints.gemsPoints.orange;
    Gem.call(this, 2);
};

OrangeGem.prototype = Object.create(Gem.prototype);
OrangeGem.prototype.constructor = OrangeGem;

var GreenGem = function () {
    this.points = constraints.gemsPoints.green;
    Gem.call(this, 1);
};

GreenGem.prototype = Object.create(Gem.prototype);
GreenGem.prototype.constructor = GreenGem;


var BlueGem = function () {
    this.points = constraints.gemsPoints.blue;
    Gem.call(this, 0);
};

BlueGem.prototype = Object.create(Gem.prototype);
BlueGem.prototype.constructor = BlueGem;

