setdisplay(640,480);
var state=0;
var score=0;
var	v=0.1;

var lettera=["0","1","2","3","4","5","6","7","8","9","Q","W","E","R","T","Y","U","I","O",
             "P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];


//- Enemy object -------------------------------------------------------------------
function Enemy(){
	this.reset =function(){
      this.x=320;
      this.y=240;
      while(Math.abs(this.x-320)<25 && Math.abs(this.y-240)<25){
  		this.x=Math.floor((Math.random() * 640) + 1);		
  		this.y=Math.floor((Math.random() * 480) + 1);	
      }
      
 		this.w= lettera[Math.floor(Math.random() * 34) ]; 	
  	}
  	this.reset();
  
  	this.draw=function(){
    	text ( display, this.x, this.y, 16, rgb(0,0,0), this.w);

    	if (this.x>320) 
          	this.x-=v;
    	else 
          	this.x+=v;
    
    	if (this.y>240) 
          	this.y-=v;
    	else 
      		this.y+=v;
  		text ( display, this.x, this.y, 16, rgb(255,255,255), this.w);
    
    	if (key[this.w.charCodeAt(0)]){
      		text ( display, this.x, this.y, 16, rgb(0,0,0), this.w);      
      		this.reset();
      		v*=1.1;
      		score++;
    	}
    	if (Math.abs(this.x-320)<5 && Math.abs(this.y-240)<5)state=0;   
  }
}


 var enemy=new Array();
 enemy[0]=new Enemy();
 enemy[1]=new Enemy();
 enemy[2]=new Enemy();
 enemy[3]=new Enemy();
 enemy[4]=new Enemy();


// - titolo -------------------------------------------------------------------------
function titolo(){
  
	cls( display, rgb(0,0,0) );
  	text ( display, 50, 50, 20, rgb(255,255,255), 'score ' + score);
  
	text ( display, 50, 240, 50, rgb(255,255,255), 'Defender Type');
  	text ( display, 50, 270, 20, rgb(255,255,255), 'press CTRL to start and press the key to kill letter enemy');
  
  	if (key[KEY_CTRL]){
    	state=1;
        score=0;
        v=0.1; 
      	for( var i=0;i < 3;i++)
      		enemy[i].reset();
	}
}

// - game -------------------------------------------------------------------------
function game(){
  	cls( display, rgb(0,0,0) );
	circle( display, 320, 240, 15, rgb(255,255,255));
    for( var i=0;i < 3;i++)
		enemy[i].draw();
}


//- update -------------------------------------------------------------------------
function update() {
	if (state==0) titolo();
	if (state==1) game();
}
