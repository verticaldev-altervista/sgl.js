# sgl.js
Simple Games Library javascript edition



<p>&nbsp;</p>

<h1 style="font-style: italic;"><strong>SGL.JS reference&nbsp;</strong></h1>

<p>&nbsp;</p>

<p><span style="line-height:1.6em">// </span><span style="line-height:1.6em">default</span></p>

<p><span style="line-height:1.6em">current.col.foreground=&quot;#000000&quot;;</span></p>

<p><span style="line-height:1.6em">current.col.background=&quot;#ffffff&quot;;</span></p>

<p>current.size=&quot;16&quot;;<br />
current.x1=10;<br />
current.y1=10;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>// &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Main screen<br />
//----------------------------------------------------------------------------------------------------------------------------</p>

<p>function setdisplay( width, height)</p>

<p><span style="line-height:1.6em">// SETFPS&nbsp;</span></p>

<p><span style="line-height:1.6em">function setfps(fps){</span></p>

<p><span style="line-height:1.6em">// UPDATE&nbsp;</span></p>

<p>function _update(){<br />
&nbsp;<br />
function createsurface(width,height){<span style="line-height:1.6em">function loadsurface(filepath){</span></p>

<p><span style="line-height:1.6em">function blt( target, &nbsp;xdest, &nbsp;ydest, wdest, hdest, surface, xsource, ysource, wsource, hsource){</span></p>

<p><span style="line-height:1.6em">function paste( target, x, y, surface){</span></p>

<p><span style="line-height:1.6em">// surfaces collisions</span></p>

<p>function hit(surfacea, xa, ya, surfaceb, xb, yb, xa2, ya2, xb2, yb2){<span style="line-height:1.6em">&nbsp;</span></p>

<p>// pixel precision surfaces collisions<br />
function hitpp(surfacea, xa, ya, surfaceb, xb, yb, xa2, ya2, xb2, yb2){</p>

<p>// &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;GRAPHICS<br />
//--------------------------------------------------------------------------------------------------------------------------<br />
&nbsp;<br />
function _hex(n){<span style="line-height:1.6em">function rgb( r, g, b){</span></p>

<p><span style="line-height:1.6em">function cls( target, col){</span></p>

<p><span style="line-height:1.6em">function putpixel( target, x, y, col){</span></p>

<p><span style="line-height:1.6em">function getpixel( target, x, y){</span></p>

<p><span style="line-height:1.6em">function hline( target, x, y, h, col){</span></p>

<p><span style="line-height:1.6em">function vline( target, x, y, v, col){</span></p>

<p><span style="line-height:1.6em">function line( target, x1, y1, x2, y2, col){</span></p>

<p><span style="line-height:1.6em">function aline( target, x1, y1, d , a, col){</span></p>

<p><span style="line-height:1.6em">function box( target, x, y, w, h, col){</span></p>

<p><span style="line-height:1.6em">function bar( target, x, y, w, h, col){</span></p>

<p><span style="line-height:1.6em">function circle( target, vx, vy, r, col){</span></p>

<p><span style="line-height:1.6em">function fillcircle( target, vx, vy, r, col){</span></p>

<p><span style="line-height:1.6em">//text</span></p>

<p>//------------------------------------------------------------------------------------------------------------------</p>

<p>var fontName=&quot;Arial&quot;;</p>

<p><br />
function setfont(fnt){</p>

<p><span style="line-height:1.6em">function text ( target, x, y, size, col, txt){</span></p>

<p><span style="line-height:1.6em">//mouse code</span></p>

<p>//--------------------------------------------------------------------------------------------------------------------</p>

<p>var mouseX=0;<br />
var mouseY=0;<br />
var mouseB=0;</p>

<p>function handleMouseMove( e){<br />
&nbsp;<br />
function handleMouseDown( e){<br />
&nbsp;<br />
function handleMouseUp(e){<br />
&nbsp;<br />
//touch code<br />
&nbsp;<br />
var touchB;<br />
var touchX;<br />
var touchY;</p>

<p>&nbsp;<br />
function handleTouchStart(e){&nbsp;<br />
&nbsp;<br />
function handleTouchEnd(e){&nbsp;<br />
&nbsp;<br />
function handleTouchMove(e){<br />
//keyboard code<br />
//-------------------------------------------------------------------------------------------------------------------------</p>

<p>var KEY_ESC&nbsp;&nbsp; &nbsp;=27;<br />
var KEY_SPACE= 32; &nbsp;&nbsp; &nbsp;<br />
var KEY_UP&nbsp;&nbsp; &nbsp;= 38;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;<br />
var KEY_LEFT &nbsp;&nbsp; &nbsp;= 37;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;<br />
var KEY_RIGHT = 39;&nbsp;&nbsp; &nbsp;<br />
var KEY_DOWN = 40;&nbsp;&nbsp; &nbsp;<br />
var KEY_CTRL= 17;<br />
var KEY_BACKSPACE&nbsp;&nbsp; &nbsp; = 8;<br />
var KEY_TAB = 9;<br />
var KEY_ENTER = 13;<br />
var KEY_SHIFT&nbsp;&nbsp; &nbsp;= 16;<br />
var KEY_CTRL&nbsp;&nbsp; &nbsp;= 17;<br />
var KEY_ALT =&nbsp;&nbsp; &nbsp; 18;<br />
var KEY_PAUSE_BREAK =&nbsp;&nbsp; &nbsp; 19;<br />
var KEY_CAPS_LOCK = 20;<br />
var KEY_ESCAPE = 27;<br />
var KEY_PAGE_UP =&nbsp;&nbsp; &nbsp; 33;<br />
var KEY_PAGE_DOWN = 34;<br />
var KEY_END = 35;<br />
var KEY_HOME = 36;<br />
var KEY_LEFT_ARROW = 37;<br />
var KEY_UP_ARROW = 38;<br />
var KEY_RIGHT_ARROW = 39;<br />
var KEY_DOWN_ARROW = 40;<br />
var KEY_INSERT = 45;<br />
var KEY_DEL =&nbsp;&nbsp; &nbsp; 46;<br />
var KEY_0 =&nbsp;&nbsp; &nbsp; 48;<br />
var KEY_1 =&nbsp;&nbsp; &nbsp; 49;<br />
var KEY_2 =&nbsp;&nbsp; &nbsp; 50;<br />
var KEY_3 =&nbsp;&nbsp; &nbsp; 51;<br />
var KEY_4 =&nbsp;&nbsp; &nbsp; 52;<br />
var KEY_5 =&nbsp;&nbsp; &nbsp; 53;<br />
var KEY_6 =&nbsp;&nbsp; &nbsp; 54;<br />
var KEY_7 =&nbsp;&nbsp; &nbsp; 55;<br />
var KEY_8 =&nbsp;&nbsp; &nbsp; 56;<br />
var KEY_9 =&nbsp;&nbsp; &nbsp; 57;<br />
var KEY_A =&nbsp;&nbsp; &nbsp; 65;<br />
var KEY_B =&nbsp;&nbsp; &nbsp; 66;<br />
var KEY_C =&nbsp;&nbsp; &nbsp; 67;<br />
var KEY_D =&nbsp;&nbsp; &nbsp; 68;<br />
var KEY_E =&nbsp;&nbsp; &nbsp; 69;<br />
var KEY_F =&nbsp;&nbsp; &nbsp; 70;<br />
var KEY_G =&nbsp;&nbsp; &nbsp; 71;<br />
var KEY_H =&nbsp;&nbsp; &nbsp; 72;<br />
var KEY_I&nbsp;&nbsp; &nbsp; =&nbsp;&nbsp; &nbsp; 73;<br />
var KEY_J&nbsp;&nbsp; &nbsp; =&nbsp;&nbsp; &nbsp; 74;<br />
var KEY_K&nbsp;&nbsp; &nbsp; =&nbsp;&nbsp; &nbsp; 75;<br />
var KEY_L&nbsp;&nbsp; &nbsp; =&nbsp;&nbsp; &nbsp; 76;<br />
var KEY_M =&nbsp;&nbsp; &nbsp; 77;<br />
var KEY_N =&nbsp;&nbsp; &nbsp; 78;<br />
var KEY_O =&nbsp;&nbsp; &nbsp; 79;<br />
var KEY_P =&nbsp;&nbsp; &nbsp; 80;<br />
var KEY_Q =&nbsp;&nbsp; &nbsp; 81;<br />
var KEY_R =&nbsp;&nbsp; &nbsp; 82;<br />
var KEY_S =&nbsp;&nbsp; &nbsp; 83;<br />
var KEY_T =&nbsp;&nbsp; &nbsp; 84;<br />
var KEY_U =&nbsp;&nbsp; &nbsp; 85;<br />
var KEY_V =&nbsp;&nbsp; &nbsp; 86;<br />
var KEY_W=&nbsp;&nbsp; &nbsp; 87;<br />
var KEY_X =&nbsp;&nbsp; &nbsp; 88;<br />
var KEY_Y =&nbsp;&nbsp; &nbsp; 89;<br />
var KEY_Z =&nbsp;&nbsp; &nbsp; 90;<br />
var KEY_LEFT_WINDOW_KEY =&nbsp;&nbsp; &nbsp; &nbsp;91;<br />
var KEY_RIGHT_WINDOW_KEY = &nbsp;92;<br />
var KEY_SELECT_KEY = 93;<br />
var KEY_NUMPAD_0 = &nbsp; 96;<br />
var KEY_NUMPAD_1 = &nbsp; 97;<br />
var KEY_NUMPAD_2 = &nbsp; 98;<br />
var KEY_NUMPAD_3 = &nbsp; 99;<br />
var KEY_NUMPAD_4 =&nbsp;&nbsp; &nbsp; 100;<br />
var KEY_NUMPAD_5 = 101;<br />
var KEY_NUMPAD_6 =&nbsp;&nbsp; &nbsp; 102;<br />
var KEY_NUMPAD_7 =&nbsp;&nbsp; &nbsp; 103;<br />
var KEY_NUMPAD_8 =&nbsp;&nbsp; &nbsp; 104;<br />
var KEY_NUMPAD_9 =&nbsp;&nbsp; &nbsp; 105;<br />
var KEY_MULTIPLY &nbsp; &nbsp; =&nbsp;&nbsp; &nbsp; 106;<br />
var KEY_ADD&nbsp;&nbsp; &nbsp; &nbsp; = 107;<br />
var KEY_SUBTRACT =&nbsp;&nbsp; &nbsp; 109;<br />
var KEY_DECIMAL_POINT =&nbsp;&nbsp; &nbsp; 110;<br />
var KEY_DIVIDE&nbsp;&nbsp; &nbsp;= 111;<br />
var KEY_F1&nbsp;&nbsp; &nbsp; =112;<br />
var KEY_F2&nbsp;&nbsp; &nbsp; =113;<br />
var KEY_F3&nbsp;&nbsp; &nbsp; =114;<br />
var KEY_F4&nbsp;&nbsp; &nbsp; =115;<br />
var KEY_F5&nbsp;&nbsp; &nbsp;= 116;<br />
var KEY_F6&nbsp;&nbsp; &nbsp; =117;<br />
var KEY_F7&nbsp;&nbsp; &nbsp;= 118;<br />
var KEY_F8&nbsp;&nbsp; &nbsp; =119;<br />
var KEY_F9&nbsp;&nbsp; &nbsp; =120;<br />
var KEY_F10&nbsp;&nbsp; &nbsp; =121;<br />
var KEY_F11&nbsp;&nbsp; &nbsp; =122;<br />
var KEY_F12&nbsp;&nbsp; &nbsp; =123;<br />
var KEY_NUM_LOCK&nbsp;&nbsp; &nbsp; =144;<br />
var KEY_SCROLL_LOCK&nbsp;&nbsp; &nbsp; =145;<br />
var KEY_SEMI_COLON&nbsp;&nbsp; &nbsp; =186;<br />
var KEY_EQUAL_SIGN&nbsp;&nbsp; &nbsp; =187;<br />
var KEY_COMMA&nbsp;&nbsp; &nbsp; =188;<br />
var KEY_DASH&nbsp;&nbsp; &nbsp; =189;<br />
var KEY_PERIOD&nbsp;&nbsp; &nbsp; =190;<br />
var KEY_FORWARD_SLASH&nbsp;&nbsp; &nbsp; =191;<br />
var KEY_GRAVE_ACCENT&nbsp;&nbsp; &nbsp; =192;<br />
var KEY_OPEN_BRACKET&nbsp;&nbsp; &nbsp; =219;<br />
var KEY_BACK_SLASH&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; =220;<br />
var KEY_CLOSE_BRAKET&nbsp;&nbsp; &nbsp; =221;<br />
var KEY_SINGLE_QUOTE&nbsp;&nbsp; &nbsp; =222;</p>

<p><span style="line-height:1.6em">// sound</span></p>

<p>&nbsp;
<br />
function loadsound(filepath)<br />
<span style="line-height:1.6em">function playsound(sound)</span></p>

<p>&nbsp;&nbsp; &nbsp;sound.play();</p><br />

<p>&nbsp;</p>

