

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
		var strToLog = this.name + /*mc: " ## used:" + System.getSystemStats().usedMemory + " ## free:" + System.getSystemStats().freeMemory +*/ ": " + str;
		console.log(strToLog); //mc:System.println(strToLog);
	}

}