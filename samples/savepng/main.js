setdisplay();
var op=0;

function update(){
		if (op==0){
			cls();
			box(display,10,10,50,50,"red");
			paint(display,25,25,"#ff0000");
			savearea(display,0,0,128,128);
			op=1;
		}
	
}
