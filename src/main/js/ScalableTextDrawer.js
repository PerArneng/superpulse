
class ScalableTextDrawer {

	/*mc:var log;*/
	/*mc:var font;*/
	/*mc:var vdisp;*/
	/*mc:var currentChar;*/
	/*mc:var charPos;*/
	/*mc:var pos;*/
	/*mc:var charDim;*/
	/*mc:var pixelToDraw;*/


	constructor() { //mc:function initialize() {
		this.log = new Log("ScalableTextDrawer");
		this.log.log("initialize");
		this.font = new Font();
		this.vdisp = new VirtualDisplay();
		this.currentChar = new Array(15); //mc:self.currentChar = new [15];
		this.charPos = new Point(0, 0);
		this.pos = new Point(0, 0);
		this.charDim = new Dimension(3, 5);
		this.pixelToDraw = new Rectangle(0, 0, 0, 0);
		this.log.log("initialize finished");
	}

	/*mc:function*/ draw(dctx, bounds, heartRate) {
				
  		var text = "" + heartRate; //mc:var text = Lang.format("$1$", [heartRate]);
  		var textLength = text.length/*mc:()*/;
		var bytesPerChar = 15;		

		this.vdisp.update(
			textLength * this.charDim.width + (textLength - 1), this.charDim.height,
			bounds
		);

		for (var i=0;i<textLength;i++) {
			var chr = text.substring(i, i + 1);

			this.font.getCharData(chr, this.currentChar);

			for (var n=0;n<bytesPerChar;n++) {
				var doDraw = this.currentChar[n];
				if (doDraw > 0) {
					this.indexToPos(n, this.charDim, this.charPos);
					this.pos.set(this.charPos.x + (i * (this.charDim.width + 1)), this.charPos.y);

					this.vdisp.getPixel(this.pos, this.pixelToDraw);
					
					dctx.fillRectangle(this.pixelToDraw.x, this.pixelToDraw.y, this.pixelToDraw.width, this.pixelToDraw.height);
				}
			}

		}

	}

	/*mc:function*/ indexToPos(index, dim, returnPos) {
		var x = index % dim.width;
		var y = (index - x) / dim.width;

		returnPos.set(x, y);
	}

}

