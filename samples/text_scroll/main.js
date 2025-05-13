setdisplay(640,480);
var txt="welcome to sgl.js ";

var x=new Array();
var y=new Array();
var vx=new Array();
var vy=new Array();
var s= new Array();
var c=new Array();
i=0;

for( i=0;i<8;i++){
 x[i]=Math.floor(Math.random()*640);
 y[i]=i*48
 vx[i]=i;
 vy[i]=0;
 s[i]=i*8;
 c[i]=rgb(0,0,128+(i*(128/8)));
}

async function update() {
 	cls(display,rgb(0,0,0));
	for( i=0;i<8;i++){
     	x[i]-=vx[i];
     	if(x[i]<-400 ) x[i]=640;
      text ( display, x[i], y[i], s[i], c[i], txt);
	}
}

