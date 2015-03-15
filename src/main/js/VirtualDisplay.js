
class VirtualDisplay {
	
	/*mc:function*/ pixelDimensions(virtDim, targetDim, returnDim) {

		var pixelWidth = targetDim.width / virtDim.width;
		var pixelHeight = targetDim.height / virtDim.height;

		returnDim.set(pixelWidth, pixelHeight);
	}

	/*mc:function*/ translatePixel(point, virtDim, targetBounds, targetDim, pxlDim, returnPos) {

		var xpos = point.x * pxlDim.width + targetBounds.x;
		var ypos = point.y * pxlDim.height + targetBounds.y;

		returnPos.set(xpos, ypos);
	}

	/*mc:function*/ indexToPos(index, dim, returnPos) {
		var x = index % dim.width;
		var y = (index - x) / dim.width;

		returnPos.set(x, y);
	}

}