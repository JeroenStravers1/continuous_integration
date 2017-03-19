define(function(){
	
	function SimpleProjectile(opts, strength, direction, startX, startY){
		this.$el = $('<div style="position:absolute;width:25px;height:27px;background:url(img/zelda.gif)"/>');

		this.speed = 3;
		
		this.left = startX;
		this.top = startY;
		
		this.strength = strength;
		this.direction = direction;
		
		this.$el.css({top:this.top,left:this.left});
		opts.$body.append(this.$el);
	}
	SimpleProjectile.prototype.moveUp = function(){
		this.top -= this.speed;
		this.updatePosition();
	};
	SimpleProjectile.prototype.moveDown = function(){
		this.top += this.speed;
		this.updatePosition();
	};
	SimpleProjectile.prototype.moveLeft = function(){
		this.left -= this.speed;
		this.updatePosition();
	};
	SimpleProjectile.prototype.moveRight = function(){
		this.left += this.speed;
		this.updatePosition();
	};
	SimpleProjectile.prototype.updatePosition = function(){
		this.$el.css({
			top: this.top,
			left: this.left
		});
	};

	return SimpleProjectile;

});