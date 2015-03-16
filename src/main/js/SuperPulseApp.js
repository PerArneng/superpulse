//mc:using Toybox.Application; 

class SuperPulseApp /*mc:extends Application.AppBase*/ {

    /*mc:var log;*/
    
    constructor() { //mc:function initialize() {
        this.log = new Log("SuperPulseApp");
        this.log.logValue("AppVersion", "1.4");
    }


    //! onStart() is called on application start uddp
    /*mc:function*/ onStart() {
    }

    //! onStop() is called when your application is exiting
    /*mc:function*/ onStop() {
    }

    //! Return the initial view of your application here
    /*mc:function*/ getInitialView() {
        return [ new SuperPulseField() ];
    }

}