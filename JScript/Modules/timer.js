class Timer {
    _interval;
    _callback = null;
    _timerID = null;

    constructor(vInterval = 1000){
        this._interval = vInterval;

    }

    start(){
        this.end();
        this._timerID = window.setInterval(this._callback, this._interval);
    }

    end(){
        if(this._timerID != null)
            clearInterval(this._timerID);
        this._timerID = null;
    }
};

export {Timer};