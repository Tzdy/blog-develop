(function(){
        var Spider = window.Spider = function(){
                this.div = document.getElementsByClassName('spider')[0];
                this.x = 0;
                this.y = 0;
        }
        Spider.prototype.front = function(){
                x = 0;
                this.div.style.transform = "perspective(800px) rotateX(" + x + "deg) rotateY(" + this.y + "deg)";
        }
        Spider.prototype.bottom = function(){
                x = 90;
                this.div.style.transform = "perspective(800px) rotateX(" + x + "deg) rotateY(" + this.y + "deg)";
        }
        Spider.prototype.hidden = function(){
                x = 180;
                this.div.style.transform = "perspective(800px) rotateX(" + x + "deg) rotateY(" +this.y + "deg)";
        }
        Spider.prototype.top = function(){
                x = 270;
                this.div.style.transform = "perspective(800px) rotateX(" + x + "deg) rotateY(" + this.y + "deg)";
        }

}());