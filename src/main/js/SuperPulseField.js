//mc:using Toybox.Application;
//mc:using Toybox.WatchUi;
//mc:using Toybox.Graphics;
//mc:using Toybox.Lang;

class SuperPulseField /*mc:extends WatchUi.DataField*/ {

	//mc:var nfo;
	//mc:var std;
	//mc:var oldWidth;
	//mc:var oldHeight;
	//mc:var majorAreaBounds;
	//mc:var bounds;
	//mc:var topMajorBounds;
	//mc:var middleMajorBounds;
	//mc:var bottomMajorBounds;
	/*mc:var log;*/
	/*mc:var hr;*/

	constructor() { //mc:function initialize() {
		this.log = new Log("SuperPulseField");
		this.log.log("initialize");

    	this.hr = "000";
    	this.std = new ScalableTextDrawer();
    	this.oldWidth = -555;
    	this.oldHeight = -555;
		this.majorAreaBounds = new Rectangle(0,0,0,0);
  		this.bounds = new Rectangle(0,0,0,0);
  		this.topMajorBounds = new Rectangle(0,0,0,0);
  		this.middleMajorBounds = new Rectangle(0,0,0,0);
  		this.bottomMajorBounds = new Rectangle(0,0,0,0);
  		this.log.log("initialize finished");

  	}

	/*mc:function*/ compute(info) {

		//this.log.logValue("info", info);

		if (info == null) {return;}

		//this.log.logValue("info.currentHeartRate", info.currentHeartRate);

		if (info.currentHeartRate == null) {return;}


		/*mc:if (!(info.currentHeartRate instanceof Number)) { return; } */
		this.hr = "" + info.currentHeartRate;  	
		//this.log.logValue("hr", info);

	}

  	/*mc:function*/ calculateBounds(width, height) {

		//this.log.logValue("width", width);
		//this.log.logValue("height", height);


  		if (width != this.oldWidth || height != this.oldHeight) {
  			//this.log.logValue("recalc", "now");
	  		var hgap = width*0.01; 
	  		var vgap = height*0.01; 
	  		this.majorAreaBounds.set(hgap, vgap, (width*0.1-hgap), height-vgap*2);
	  		this.bounds.set( this.majorAreaBounds.width + hgap * 2, vgap, width-(this.majorAreaBounds.width + hgap*3), height-vgap*2);

	  		var majorNrHeight = (this.majorAreaBounds.height - vgap*2)/3; 

	  		this.topMajorBounds.set(hgap, vgap, this.majorAreaBounds.width, majorNrHeight);
	  		this.middleMajorBounds.set(hgap, vgap*2+majorNrHeight, this.majorAreaBounds.width, majorNrHeight);
	  		this.bottomMajorBounds.set(hgap, vgap*3+majorNrHeight*2, this.majorAreaBounds.width, majorNrHeight);
  		}

  		this.oldWidth = width;
  		this.oldHeight = height;
  	}
  
  	/*mc:function*/ onUpdate(dc) {
		//this.log.logValue("dc", dc);

		this.calculateBounds(dc.getWidth(), dc.getHeight());

  		dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);
  		dc.clear();
  	  	dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);

  		var major = "0";
  		var minor = "00";
  		if (this.hr.length/*mc:()*/ == 3) {
  			major = this.hr.substring(0, 1);
  			minor = this.hr.substring(1, 3);
  		} else {
  			major = "0";
  			minor = this.hr;
  		}

	  	this.std.draw(dc, this.bounds, minor);

	  	if (major.find("2") == 0) {
	  		dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);
	  		this.std.draw(dc, this.topMajorBounds, "2");
	  		dc.setColor(Graphics.COLOR_LT_GRAY, Graphics.COLOR_WHITE);
	  		this.std.draw(dc, this.middleMajorBounds, "1");
	  		dc.setColor(Graphics.COLOR_LT_GRAY, Graphics.COLOR_WHITE);
	  		this.std.draw(dc, this.bottomMajorBounds, "0");
	  	} else if (major.find("1") == 0) {
	  		dc.setColor(Graphics.COLOR_LT_GRAY, Graphics.COLOR_WHITE);
	  		this.std.draw(dc, this.topMajorBounds, "2");
	  		dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);
	  		this.std.draw(dc, this.middleMajorBounds, "1");
	  		dc.setColor(Graphics.COLOR_LT_GRAY, Graphics.COLOR_WHITE);
	  		this.std.draw(dc, this.bottomMajorBounds, "0");
	  	} else if (major.find("0") == 0) {
	  		dc.setColor(Graphics.COLOR_LT_GRAY, Graphics.COLOR_WHITE);
	  		this.std.draw(dc, this.topMajorBounds, "2");
	  		dc.setColor(Graphics.COLOR_LT_GRAY, Graphics.COLOR_WHITE);
	  		this.std.draw(dc, this.middleMajorBounds, "1");
	  		dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);
	  		this.std.draw(dc, this.bottomMajorBounds, "0");
	  	}

  	}
}
