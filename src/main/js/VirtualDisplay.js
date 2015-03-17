
class VirtualDisplay {
	
	/*mc:var log;*/
	/*mc:var dim;*/
	/*mc:var targetRect;*/
	/*mc:var pxlDim;*/

	constructor() { //mc:function initialize() {
		this.log = new Log("VirtualDisplay");
		this.log.log("initialize");
		this.dim = new Dimension(0, 0);
		this.targetRect = new Rectangle(0, 0, 0, 0);
		this.pxlDim  = new Dimension(0, 0);
		this.log.log("initialize finished");
	}

	/*mc:function*/ update(width, height, targetBounds) {
		this.dim.set(width, height);
		this.targetRect.set(targetBounds.x, targetBounds.y, targetBounds.width, targetBounds.height);
		this.updatePixelDimensions();
	}

	/*mc:function*/ updatePixelDimensions() {

		var pixelWidth = this.targetRect.width / this.dim.width;
		var pixelHeight = this.targetRect.height / this.dim.height;

		this.pxlDim.set(pixelWidth, pixelHeight);
	}

	/*mc:function*/ getPixel(point, returnPixel) {

		var xpos = point.x * this.pxlDim.width + this.targetRect.x;
		var ypos = point.y * this.pxlDim.height + this.targetRect.y;

		returnPixel.set(xpos, ypos, this.pxlDim.width, this.pxlDim.height);
	}

}