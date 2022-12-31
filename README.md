# sgl.js
Simple Games Library javascript edition

# SGL.JS reference

// SCREEN
//----------------------------------------------------------------------------------------------------------------------------

function setdisplay( width, height)

 SETFPS
 
function setfps(fps)

UPDATE

function _update()


SURFACES
----------------------------------------------------------------------------------------------------------------------------

function createsurface(width,height)

function loadsurface(filepath)

function savearea(target,x,y,w,h)

function savesurface(target) 

function blt( target, xdest, ydest, wdest, hdest, surface, xsource, ysource, wsource, hsource)

function paste( target, x, y, surface, angle, zoom, alpha)

function hit(surfacea, xa, ya, surfaceb, xb, yb, xa2, ya2, xb2, yb2) // surfaces collisions

function hitpp(surfacea, xa, ya, surfaceb, xb, yb, xa2, ya2, xb2, yb2) // pixel precision surfaces collisions


GRAPHICS
--------------------------------------------------------------------------------------------------------------------------

function _hex(n){

function rgb( r, g, b)

function cls( target, col)

function putpixel( target, x, y, col)

function getpixel( target, x, y)

function hline( target, x, y, h, col)

function vline( target, x, y, v, col)

function line( target, x1, y1, x2, y2, col)

function aline( target, x1, y1, d , a, col)

function box( target, x, y, w, h, col)

function bar( target, x, y, w, h, col)

function circle( target, vx, vy, r, col)

function fillcircle( target, vx, vy, r, col)

function paint(target, x, y, color)


TEXT
------------------------------------------------------------------------------------------------------------------

function setfont(fnt){</p>

function text ( target, x, y, size, col, txt)


MOUSE
--------------------------------------------------------------------------------------------------------------------

var mouseX

var mouseY

var mouseB

function handleMouseMove( e)

function handleMouseDown( e)

function handleMouseUp(e)


TOUCH
-------------------------------------------------------------------------------------------------------------------------

var touchB

var touchX

var touchY

function handleTouchStart(e)

function handleTouchEnd(e)

function handleTouchMove(e)


KEYBOARD
-------------------------------------------------------------------------------------------------------------------------

var KEY_ESC = 27

var KEY_SPACE = 32

var KEY_UP = 38

var KEY_LEFT = 37

var KEY_RIGHT = 39

var KEY_DOWN = 40

var KEY_CTRL = 17

var KEY_BACKSPACE = 8

var KEY_TAB = 9

var KEY_ENTER = 13

var KEY_SHIFT = 16

var KEY_CTRL = 17

var KEY_ALT = 18

var KEY_PAUSE_BREAK = 19

var KEY_CAPS_LOCK = 20

var KEY_ESCAPE = 27

var KEY_PAGE_UP = 33

var KEY_PAGE_DOWN = 34

var KEY_END = 35

var KEY_HOME = 36

var KEY_LEFT_ARROW = 37

var KEY_UP_ARROW = 38

var KEY_RIGHT_ARROW = 39

var KEY_DOWN_ARROW = 40

var KEY_INSERT = 45

var KEY_DEL = 46

var KEY_0 = 48

var KEY_1 = 49

var KEY_2 = 50

var KEY_3 = 51

var KEY_4 = 52

var KEY_5 = 53

var KEY_6 = 54

var KEY_7 = 55

var KEY_8 = 56

var KEY_9 = 57

var KEY_A = 65

var KEY_B = 66

var KEY_C = 67

var KEY_D = 68

var KEY_E = 69

var KEY_F = 70

var KEY_G = 71

var KEY_H = 72

var KEY_I = 73

var KEY_J = 74

var KEY_K = 75

var KEY_L = 76

var KEY_M = 77

var KEY_N = 78

var KEY_O = 79

var KEY_P = 80

var KEY_Q = 81

var KEY_R = 82

var KEY_S = 83

var KEY_T = 84

var KEY_U = 85

var KEY_V = 86

var KEY_W = 87

var KEY_X = 88

var KEY_Y = 89

var KEY_Z = 90

var KEY_LEFT_WINDOW_KEY = 91

var KEY_RIGHT_WINDOW_KEY = 92

var KEY_SELECT_KEY = 93

var KEY_NUMPAD_0 = 96

var KEY_NUMPAD_1 = 97

var KEY_NUMPAD_2 = 98

var KEY_NUMPAD_3 = 99

var KEY_NUMPAD_4 = 100

var KEY_NUMPAD_5 = 101

var KEY_NUMPAD_6 = 102

var KEY_NUMPAD_7 = 103

var KEY_NUMPAD_8 = 104

var KEY_NUMPAD_9 = 105

var KEY_MULTIPLY = 106

var KEY_ADD = 107

var KEY_SUBTRACT = 109

var KEY_DECIMAL_POINT = 110

var KEY_DIVIDE = 111

var KEY_F1 = 112

var KEY_F2 = 113

var KEY_F3 = 114

var KEY_F4 = 115

var KEY_F5=  116

var KEY_F6 = 117

var KEY_F7 = 118

var KEY_F8 = 119

var KEY_F9 = 120

var KEY_F10 = 121

var KEY_F11 = 122

var KEY_F12 = 123

var KEY_NUM_LOCK = 144

var KEY_SCROLL_LOCK = 145

var KEY_SEMI_COLON = 186

var KEY_EQUAL_SIGN = 187

var KEY_COMMA = 188

var KEY_DASH = 189

var KEY_PERIOD = 190

var KEY_FORWARD_SLASH = 191

var KEY_GRAVE_ACCENT = 192

var KEY_OPEN_BRACKET = 219

var KEY_BACK_SLASH = 220

var KEY_CLOSE_BRAKET = 221

var KEY_SINGLE_QUOTE = 222


SOUND
-------------------------------------------------------------------------------------------------------------------------

function loadsound(filepath)

function playsound(sound)

sound.play()
