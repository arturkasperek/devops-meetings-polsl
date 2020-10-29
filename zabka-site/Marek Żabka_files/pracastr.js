// ąęć
window.onload=function()
{
	//alert("OK");
}


function wejscie()
{
	var d = new Date();
   d.setTime(d.getTime() + (365*24*60*60*1000));
    var dodnia = "expires="+d.toUTCString();	
	document.cookie="eeac4a5=eb3a7a33b4250b33; "+dodnia;
	document.location.reload();
}

function niewejscie()
{
	document.location.replace("?");
}



