var state=0;
var t=0;

var tabella= new Array();
 tabella[0]= new Array();
 tabella[1]= new Array();
 tabella[2]= new Array();
 tabella[3]= new Array();



function reset_tabella(){
  for (var y=0;y<4;y++){
    for (var x=0;x<4;x++){
      tabella[x][y]="";
    }
  }
}
//--------------------------------------------------------------------------------------------------
   
function draw_tabella(){
  var c;
  var col;
  for (var y=0;y<4;y++){
    for (var x=0;x<4;x++){
      c=tabella[x][y]
      col=rgb(1,1,1);
      if (c==2) col=rgb (240,240,240);
      if (c==4) col=rgb (128,240,240);
      if (c==8) col=rgb (240,128,240);
      if (c==16) col=rgb (240,240,128);
      if (c==32) col=rgb (128,128,240);
      if (c==64) col=rgb (240,128,128);
      if (c==128) col=rgb (128,240,128);
      if (c==256) col=rgb (64,240,240);
      if (c==512) col=rgb (240,64,240);
      if (c==1024) col=rgb (240,240,64);
      if (c==2048) col=rgb (64,240,64);
      
      bar( display, x*80+60,y*80+60,  80, 80, col);
      if(tabella[x][y]<10) 
        text ( display,x*80+ 90, y*80+110, 32, rgb(128,128,128), tabella[x][y]);
      if(tabella[x][y]>=10 && tabella[x][y]<100) 
        text ( display,x*80+ 80, y*80+110, 32, rgb(128,128,128), tabella[x][y]);
      if(tabella[x][y]>=100) 
        text ( display,x*80+ 70, y*80+110, 32, rgb(128,128,128), tabella[x][y]);
	  box( display, x*80+60,y*80+60,  80, 80, rgb(128,128,128));	
    }
  }
}
//--------------------------------------------------------------------------------------------------

function add_tabella(){
	var x=Math.floor((Math.random() *4 ) );
	var y=Math.floor((Math.random() *4 ) );
  while (tabella[x][y]!=""){
	x=Math.floor((Math.random() *4 ) );
	y=Math.floor((Math.random() *4 ) );  
  }
  tabella[x][y]=2;
}
//--------------------------------------------------------------------------------------------------

function tabellaUP(){
  var a=0;
  for (var x=0;x<4;x++){
   for (var y=2;y>=0;y--){
    if (tabella[x][y]=="" && tabella[x][y+1]!="" &&y <3)a=1;
    if (tabella[x][y]==""){
      for (var ya=y;ya<3;ya++){
        tabella[x][ya]=tabella[x][ya+1];
        tabella[x][ya+1]="";        
      }    
    }
   }
   for (var y=0;y<3;y++){
    if (tabella[x][y]==tabella[x][y+1] ){
      tabella[x][y]+=tabella[x][y+1];
      tabella[x][y+1]="";
      for (var ya=y+1;ya<3;ya++){
        tabella[x][ya]=tabella[x][ya+1];
        tabella[x][ya+1]="";
      }    
    }
   }
  }
 if (a==1)add_tabella();
}
//--------------------------------------------------------------------------------------------------

function tabellaDOWN(){
  var a=0;
  for (var x=0;x<4;x++){
   for (var y=1;y<4;y++){
    if (tabella[x][y]=="" && tabella[x][y-1]!="" &&y >0)a=1;
    if (tabella[x][y]==""){
      for (var ya=y;ya>0;ya--){
        tabella[x][ya]=tabella[x][ya-1];
        tabella[x][ya-1]="";
      }    
    }
   } 
   for (var y=3;y>0;y--){
    if (tabella[x][y]==tabella[x][y-1] ){
      tabella[x][y]+=tabella[x][y-1];
      tabella[x][y-1]="";
      for (var ya=y-1;ya>0;ya--){
        tabella[x][ya]=tabella[x][ya-1];
        tabella[x][ya-1]="";
      }    
    }
   }
  }
  if (a==1)add_tabella();
}
//--------------------------------------------------------------------------------------------------

function tabellaLEFT(){
  var a=0;
  for (var y=0;y<4;y++){
   for (var x=2;x>=0; x-- ){
    if (tabella[x][y]=="" && tabella[x+1][y]!="" && x <3)a=1;
    if (tabella[x][y]==""){
      for (var xa=x;xa<3;xa++){
        tabella[xa][y]=tabella[xa+1][y];
        tabella[xa+1][y]="";
      }    
    }
   }
   for (var x=0;x<3;x++){
    if (tabella[x][y]==tabella[x+1][y] ){
      tabella[x][y]+=tabella[x+1][y];
      tabella[x+1][y]="";
      for (var xa=x+1;xa<3;xa++){
        tabella[xa][y]=tabella[xa+1][y];
        tabella[xa+1][y]="";
      }    
    }
   }
  }
  if (a==1)add_tabella();
}
//--------------------------------------------------------------------------------------------------

function tabellaRIGHT(){
  var a=0;
  for (var y=0;y<4;y++){
   for (var x=1;x<4;x++){
    if (tabella[x][y]=="" && tabella[x-1][y]!="" &&x >0)a=1;
    if (tabella[x][y]==""){
      for (var xa=x;xa>0;xa--){
        tabella[xa][y]=tabella[xa-1][y];
        tabella[xa-1][y]="";
      }    
    }
   }
   for (var x=3;x>0;x--){
    if (tabella[x][y]==tabella[x-1][y] ){
      tabella[x][y]+=tabella[x-1][y];
      tabella[x-1][y]="";
      for (var xa=x-1;xa>0;xa--){
        tabella[xa][y]=tabella[xa-1][y];
        tabella[xa-1][y]="";
      }    
    }
   }
  }
  if (a==1)add_tabella();
}
//--------------------------------------------------------------------------------------------------

function game_over(){
  var g=1;
  for (var y=0;y<4;y++){
    for (var x=0;x<4;x++){
      if (tabella[x][y]=="")g=0;
      if (y<3 && tabella[x][y]==tabella[x][y+1])g=0;
      if (x<3 && tabella[x][y]==tabella[x+1][y])g=0;
    }
  }
  if(g==1)state=0;
}
//--------------------------------------------------------------------------------------------------

function game(){
  cls( display, rgb(0,0,0) );
  draw_tabella();
  
  t--;
  if (t<0){
  	if (key[KEY_ESC]) state=0;  
  	if (key[KEY_UP]){tabellaUP();t=10;}  
  	if (key[KEY_DOWN]){tabellaDOWN();t=10;} 
  	if (key[KEY_LEFT]){tabellaLEFT();t=10;}
  	if (key[KEY_RIGHT]){tabellaRIGHT();t=10;}
   	game_over();
  }
}
//--------------------------------------------------------------------------------------------------

function titolo(){
  cls( display, rgb(0,0,0) );
  text ( display, 50, 240, 50, rgb(255,255,255), '2048');
  text ( display, 50, 260, 20, rgb(255,255,255), 'press CTRL to start and arrows keyto play');
  if (key[KEY_CTRL]){
    state=1;
    reset_tabella();
    add_tabella();
  }
}
//--------------------------------------------------------------------------------------------------

function update() {
  if (state==0) titolo();
  if (state==1) game();
}
