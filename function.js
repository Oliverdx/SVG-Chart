var path = [320, 320, 320, 320 ,320]; ///Initial points

function changeDot( i, v ){ // i = Take the Input index; v = take the value from the input 

var vPath = 320 - ( v * 53.8);
var dot = i+1;
 
path[i] = vPath;

//Conditions for avoid overflow the Chart
  
if( v < 0){
   path[i] = 320;
   vPath = 320;
}
  
if( v > 5){
    path[i] = 50;
    vPath = 50;
}

document.getElementsByClassName('dot' + dot)[0].setAttribute("cy", vPath); //Move the Circles
document.getElementById('graphcolor').setAttribute('d',  "M75,320 L135,"+ path[0] + " 245,"+ path[1] +" 360,"+ path[2] +"  475,"+ path[3] +"  590,"+ path[4] +"  650,320" ); //Move the red line
  
}