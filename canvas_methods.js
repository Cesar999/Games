/** @type {CanvasRenderingContext2D} */

getContext() //canvas //HTML object, with properties and methods for drawing
fillRect(x,y,width,height) //ctx //method draws a rectangle
.fillStyle //ctx //fillStyle property can be a CSS color, a gradient, or a pattern
moveTo(x,y) //ctx  //defines the starting point of the line
lineTo(x,y) //ctx //defines the ending point of the line

beginPath() //ctx  //begins a path
arc(x,y,r,startangle,endangle) //ctx  //creates an arc/curve.

createLinearGradient(x,y,x1,y1)//ctx //creates a linear gradient
createRadialGradient(x,y,r,x1,y1,r1) //ctx  //creates a radial/circular gradient

.font //ctx //defines the font properties for the text
fillText(text,x,y) //ctx //draws "filled" text on the canvas
strokeText(text,x,y)//ctx //draws text on the canvas (no fill)

drawImage(img, x, y, width, height);//ctx

