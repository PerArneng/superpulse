

class Log {

	/*mc:var name;*/

	constructor(name) { //mc:function initialize(name) {
		this.name = name; 
	}

	/*mc:function*/ logValue(name, value) {
		var str = "" + name + ": " + value;
		this.log(str);
	}

	/*mc:function*/ log(str) {
		console.log(str); //mc:System.println(str);
	}

}