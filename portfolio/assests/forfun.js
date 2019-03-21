//html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<svg height="210" width="500">
   <path class="path" d="
  M0 4 L0 4
  L200 4
  L250 50
  L200 100
  L250 150
  L225 175"
  style="stroke:rgb(90,90,90);stroke-width:4;fill:none;stroke-linecap:round" />
	<path class="path" d="
  M450 4 
  L450 4 
  L250 4 
  L200 50 
  L250 100 
  L200 150 
  L225 175"
    style="stroke:rgb(0,0,0);
  stroke-width:4;fill:none;stroke-linecap:round"/>
  
  	<path class="path" d="
  M450 204 
  L450 204 
  L250 204 
  L200 150 
  L250 100 
  L200 50 
  L225 25"
    style="stroke:rgb(210,210,210);
  stroke-width:4;fill:none;stroke-linecap:round"/>
  <path class="path" d="
  M0 204 
  L0 204
  L200 204
  L250 150
  L200 100
  L250 50
  L225 25"
  style="stroke:rgb(190,190,190);stroke-width:4;fill:none;stroke-linecap:round" />
  Sorry, your browser does not support inline SVG.
</svg>
</body>
</html>


//css
svg {
  margin: 10px;
}
.path {
  fill:none;
  stroke-width:4;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-dasharray: 450;
  stroke-dashoffset: 450;
  animation: dash 3s ease-out 0.5s forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}