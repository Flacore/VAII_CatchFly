import {Timer} from "./timer";

class  Fly {
    _posX; _posY; _element; _timer;

    constructor(vInterval = 1000){
        this._timer = new Timer(vInterval);
        this.createElement();
    }

    createElement(){
        this._element = document.createElement('div');
        this._element.className = "fly";
        this.changePosition();
        this.hide();
        document.body.appendChild(this._element);
    }

    changePosition(){
        this.generatePosition();
        this.rotateFly();
        this.show();
    }

    generatePosition(){
        let minX;
        let minY = minX = 0;
        let maxX= window.innerWidth - this._element.offsetWidth;
        let maxY= window.innerHeight - this._element.offsetHeight;
        let tmpX=this._posX;
        let tmpY=this._posY;
        do{
            this._posX = this.generateRandNumber(minX,maxX);
            this._posY = this.generateRandNumber(minY,maxY);
        }while( tmpX!=this._posX && tmpY!=this._posY)
        this._element.style = "top:"+this._posY+"px; left: "+this._posX+"px;";
    }

    rotateFly(){
        this._element.style.transform='rotate('+this.generateRandNumber(0,360)+' deg);';
    }

    generateRandNumber(min = 0,max = 100){
        return Math.random()* (max - min) + min;
    }

    show(){
        this._timer.start()
        this._element.style.display="none";
    }

    hide(){
        this._element.style.display="block";
    }

};

export {Fly};