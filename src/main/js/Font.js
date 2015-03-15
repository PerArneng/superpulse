

class Font {

	/*mc:var fontLookup;*/
	/*mc:var fontData;*/

	constructor() {//mc:function initialize() {

		this.fontLookup  = ". 1234567890";
		this.fontData = [
			//.
			1,
			//<space>
			0,
			//1
			9362,
			//2
			29671,
			//3
			29647,
			//4
			23497,
			//5
			31183,
			//6
			31215,
			//7
			29257,
			//8
			31727,
			//9
			31695,
			//0
			31599,
			//default
			21845
		];
	}

	/*mc:function*/ getOffset(haystack, needle) {
		
		if (haystack == null) {
			return -1;
		}
		
		if (needle == null) {
			return haystack.length/*mc:()*/;
		}

		var index = haystack.find(needle);

		if (index == null) {
			return haystack.length/*mc:()*/;
		} else {
			return index;
		}

	}

	/*mc:function*/ getCharData( chr, charArray) {

		var offset = this.getOffset(this.fontLookup, chr);
		var charNr = this.fontData[offset];

		for (var i=0;i<15;i++) {
			var bitMask = 1 << i;
			charArray[14-i] = (charNr & bitMask) >> i;
		}

	}
}