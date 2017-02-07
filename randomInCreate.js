//binary random Integer
// save file as randomInCreate.js
// to run type "node randomInCreate.js"
var randomInteger = function(val) {
	var ival = Math.random()+256;
	//console.log(ival);
	ival = Math.floor(ival);
	return ival;
}
// main
var rInt ;
var i;
for (i = 0; i < 65; i++){
rInt	= randomInteger();
//console.log(rInt+",");
process.stdout.write(rInt+",");
}
