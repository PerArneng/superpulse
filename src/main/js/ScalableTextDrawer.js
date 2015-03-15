
class ScalableTextDrawer {

	/*mc:var log;*/
	/*mc:var font;*/
	/*mc:var vdisp;*/
	/*mc:var currentChar;*/


	constructor() { //mc:function initialize() {
		this.log = new Log("ScalableTextDrawer");
		this.font = new Font();
		this.vdisp = new VirtualDisplay();
		this.currentChar = new Array(15); //mc:self.currentChar = new [15];

	}

	/*mc:function*/ draw(dctx, bounds, heartRate) {
				
  		var text = "" + heartRate; //mc:var text = Lang.format("$1$", [heartRate]);
  		var textLength = text.length/*mc:()*/;
		var charDim = new Dimension(3, 5);
		var bytesPerChar = 15;		

		var virtDim = new Dimension(textLength * charDim.width + (textLength - 1), 
									charDim.height);		
		var targetDim = bounds.getDimension();
						
		var pxDim = this.vdisp.pixelDimensions(virtDim, targetDim);

		for (var i=0;i<textLength;i++) {
			var chr = text.substring(i, i + 1);

			this.font.getCharData(chr, this.currentChar);

			for (var n=0;n<bytesPerChar;n++) {
				var doDraw = this.currentChar[n];
				if (doDraw > 0) {
					var charPos = this.vdisp.indexToPos(n, charDim);
					var pos = new Point(charPos.x + (i * (charDim.width + 1)), charPos.y);

					var targetPos = this.vdisp.translatePixel(pos, virtDim, bounds);
					
					dctx.fillRectangle(targetPos.x, targetPos.y, pxDim.width, pxDim.height);
				}
			}

		}

	}

}

