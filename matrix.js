$(document).ready(function(){
	var q = $('#q');
	q.attr('height',$(window).height())
	q.attr('width',$(window).width())

	init();
});
/**
 * 
 */
 function init(){
 	var s                = window.screen;
 	var width            = q.width=s.width;
 	var height           = q.height;
 	var yPositions       = Array(300).join(0).split('');
 	var ctx              = q.getContext('2d');
 	var font             = 'matrix';
 	var fontsize         = '12pt';
 	var background_color = 'rgba(0,0,0,.05)';

 	var draw = function () {
 		ctx.fillStyle= background_color;
 		ctx.fillRect(0,0,width,height);
 		ctx.fillStyle='#0F0';
 		ctx.font = fontsize+" "+font;
 		yPositions.map(function(y, index){
 			text = String.fromCharCode(1e2+Math.random()*33);
 			x = (index * 10)+10;
 			q.getContext('2d').fillText(text, x, y);
 			if(y > 100 + Math.random()*1e4){
 				yPositions[index]=0;
 			}else{
 				yPositions[index] = y + 10;
 			}
 		});
 	};
 	if(typeof interval != 'undefined') clearInterval(interval);
 	interval = setInterval(draw, 80);
 }
 function stop(){
 	clearInterval(interval);
 }
