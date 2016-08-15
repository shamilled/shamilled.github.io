/*var y;

function rand(){
	var y = Math.floor((Math.random() * 10) + 1);
	alert(y)
	return true;
}*/

function hide(){
	document.getElementById("rulz").style.display="none";
	document.getElementById('mainFrame').style.display="block";
	document.getElementById('scoreOutLine').style.display="block";
	document.getElementById('wordBank').style.display="block";
	document.getElementById('instr').style.display="block";	
	document.getElementById('exit').style.display="block";
}

var num = 0;


//First Row----------------------
//------------------------------

function checkQues11() {
    var x = document.getElementById("ques11").value;
    
	if ((x.toLowerCase() == "blood")||(x.toLowerCase() == "blood cells")) {
		num = num + 200;
		//alert(num);
		document.getElementById('used11').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q11div').style.display="none";
		document.getElementById('show11').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par11').style.display="none";
		document.getElementById('par11b').style.display="none";
		return false;		
    }
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 200;
	document.getElementById('show11').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used11').style.display="block";
	document.getElementById('q11div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	document.getElementById('par11b').style.display="none";
	return false;
	}

}	

function checkQues11b() {
    var x = document.getElementById("ques11b").value;
    
	if ((x.toLowerCase() == "nerve cells")||(x.toLowerCase() == "nerve cell")||(x.toLowerCase() == "nerve")) {
		num = num + 200;
		//alert(num);
		document.getElementById('used11').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q11bdiv').style.display="none";
		document.getElementById('show11').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par11').style.display="none";
		document.getElementById('par11b').style.display="none";
		return false;		
    }
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 200;
	document.getElementById('show11').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used11').style.display="block";
	document.getElementById('q11bdiv').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	document.getElementById('par11').style.display="none"
	return false;
	}

}	
	
	
function checkQues12() {
    var x = document.getElementById("ques12").value;
    
	if (x.toLowerCase() == "cell membrane") {
		num = num + 200;
		//alert(num);
		document.getElementById('used12').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q12div').style.display="none";
		document.getElementById('show12').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par12').style.display="none"
		return false;
		}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 200;
	document.getElementById('show12').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used12').style.display="block";
	document.getElementById('q12div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	

function checkQues13() {
    var x = document.getElementById("ques13").value;
    
	if ((x.toLowerCase() == "molecules")||(x.toLowerCase() == "molecule")) {
		num = num + 200;
		//alert(num);
		document.getElementById('used13').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q13div').style.display="none";
		document.getElementById('show13').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par13').style.display="none"
		return false;
	}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 200;
	document.getElementById('show13').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used13').style.display="block";
	document.getElementById('q13div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	


function checkQues14() {
    var x = document.getElementById("ques14").value;
    
	if ((x.toLowerCase() == "false")||(x.toLowerCase() == "f")) {
		num = num + 200;
		//alert(num);
		document.getElementById('used14').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q14div').style.display="none";
		document.getElementById('show14').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par14').style.display="none"
		return false;
		}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 200;
	document.getElementById('show14').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used14').style.display="block";
	document.getElementById('q14div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	

function show11(){
	var y = Math.floor((Math.random() * 10) + 1);
	alert(y)

	if (y <= 5){
		/*alert("y is less than 5")*/
		document.getElementById("q11div").style.display="block";	
		return false;
	}
	else{
		/*alert("y is greater than 5")*/
		document.getElementById('q11bdiv').style.display="block";
		return false;
	}
} 



function show12(){
	document.getElementById('q12div').style.display="block";
}

function show13(){
	document.getElementById('q13div').style.display="block";
}

function show14(){
	document.getElementById('q14div').style.display="block";
}

//Second Row-------------------------------
//-----------------------------------------

function checkQues21() {
    var x = document.getElementById("ques21").value;
    
	if ((x.toLowerCase() == "fat cells")||(x.toLowerCase() == "fat")) {
		num = num + 400;
		//alert(num);
		document.getElementById('used21').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q21div').style.display="none";
		document.getElementById('show21').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par21').style.display="none"
		return false;
		}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 400;
	document.getElementById('show21').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used21').style.display="block";
	document.getElementById('q21div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	
	
	
function checkQues22() {
    var x = document.getElementById("ques22").value;
    
	if ((x.toLowerCase() == "mitochondria")||(x.toLowerCase() == "mitochondrion")) {
		num = num + 400;
		//alert(num);
		document.getElementById('used22').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q22div').style.display="none";
		document.getElementById('show22').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par22').style.display="none"
		return false;
    }
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 400;
	document.getElementById('show22').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used22').style.display="block";
	document.getElementById('q22div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	

function checkQues23() {
    var x = document.getElementById("ques23").value;
    
	if ((x.toLowerCase() == "neutron")||(x.toLowerCase() == "neutrons")) {
		num = num + 400;
		//alert(num);
		document.getElementById('used23').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q23div').style.display="none";
		document.getElementById('show23').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par23').style.display="none"
		return false;
		}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 400;
	document.getElementById('show23').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used23').style.display="block";
	document.getElementById('q23div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	


function checkQues24() {
    var x = document.getElementById("ques24").value;
    
	if ((x.toLowerCase() == "connective tissue")||(x.toLowerCase() == "connective")) {
		num = num + 400;
		//alert(num);
		document.getElementById('used24').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q24div').style.display="none";
		document.getElementById('show24').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par24').style.display="none"
		return false;
		}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 400;
	document.getElementById('show24').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used24').style.display="block";
	document.getElementById('q24div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	

function show21(){
	document.getElementById('q21div').style.display="block";
}

function show22(){
	document.getElementById('q22div').style.display="block";
}

function show23(){
	document.getElementById('q23div').style.display="block";
}

function show24(){
	document.getElementById('q24div').style.display="block";
}





//Third Row-----------------------------------------------------------
//--------------------------------------------------------------------

function checkQues31() {
    var x = document.getElementById("ques31").value;
    
	if ((x.toLowerCase() == "compact")||(x.toLowerCase() == "compact tissue")) {
		num = num + 600;
		//alert(num);
		document.getElementById('used31').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q31div').style.display="none";
		document.getElementById('show31').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par31').style.display="none"
		return false;		
    }
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 600;
	document.getElementById('show31').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used31').style.display="block";
	document.getElementById('q31div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	
	
	
function checkQues32() {
    var x = document.getElementById("ques32").value;
    
	if ((x.toLowerCase() == "ribosomes")||(x.toLowerCase() == "ribosome")) {
		num = num + 600;
		//alert(num);
		document.getElementById('used32').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q32div').style.display="none";
		document.getElementById('show32').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par32').style.display="none"
		return false;
		}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 600;
	document.getElementById('show32').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used32').style.display="block";
	document.getElementById('q32div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	

function checkQues33() {
    var x = document.getElementById("ques33").value;
    
	if ((x.toLowerCase() == "proton")||(x.toLowerCase() == "protons")) {
		num = num + 600;
		//alert(num);
		document.getElementById('used33').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q33div').style.display="none";
		document.getElementById('show33').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par33').style.display="none"
		return false;
	}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 600;
	document.getElementById('show33').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used33').style.display="block";
	document.getElementById('q33div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	


function checkQues34() {
    var x = document.getElementById("ques34").value;
    
	if ((x.toLowerCase() == "nervous tissue")||(x.toLowerCase() == "nervous")) {
		num = num + 600;
		//alert(num);
		document.getElementById('used34').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q34div').style.display="none";
		document.getElementById('show34').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;		
		document.getElementById('par34').style.display="none"
		return false;
		}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 600;
	document.getElementById('show34').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used34').style.display="block";
	document.getElementById('q34div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	

function show31(){
	document.getElementById('q31div').style.display="block";
}

function show32(){
	document.getElementById('q32div').style.display="block";
}

function show33(){
	document.getElementById('q33div').style.display="block";
}

function show34(){
	document.getElementById('q34div').style.display="block";
}



//Fourth Row-----------------------------------------------------------
//--------------------------------------------------------------------

function checkQues41() {
    var x = document.getElementById("ques41").value;
    
	if ((x.toLowerCase() == "blood cell")||(x.toLowerCase() == "blood cells")||(x.toLowerCase() == "blood")) {
		num = num + 800;
		//alert(num);
		document.getElementById('used41').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q41div').style.display="none";
		document.getElementById('show41').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par41').style.display="none"
		return false;		
    }
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 800;
	document.getElementById('show41').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used41').style.display="block";
	document.getElementById('q41div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	
	
	
function checkQues42() {
    var x = document.getElementById("ques42").value;
    
	if ((x.toLowerCase() == "smooth endoplasmic reticulum")||(x.toLowerCase() == "smooth er")) {
		num = num + 800;
		//alert(num);
		document.getElementById('used42').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q42div').style.display="none";
		document.getElementById('show42').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par42').style.display="none";
		document.getElementById('par42b').style.display="none";
		return false;
		}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 800;
	document.getElementById('show42').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used42').style.display="block";
	document.getElementById('q42div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	document.getElementById('par42b').style.display="none";
	return false;
	}

}	

function checkQues42b() {
    var x = document.getElementById("ques42b").value;
    
	if ((x.toLowerCase() == "lysosome")||(x.toLowerCase() == "lysosomes")) {
		num = num + 800;
		//alert(num);
		document.getElementById('used42').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q42bdiv').style.display="none";
		document.getElementById('show42').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par42').style.display="none";
		document.getElementById('par42b').style.display="none";
		return false;
		}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 800;
	document.getElementById('show42').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used42').style.display="block";
	document.getElementById('q42bdiv').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	document.getElementById('par42').style.display="none";
	return false;
	}

}	

function checkQues43() {
    var x = document.getElementById("ques43").value;
    
	if (x.toLowerCase() == "chemical bond") {
		num = num + 800;
		//alert(num);
		document.getElementById('used43').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q43div').style.display="none";
		document.getElementById('show43').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par43').style.display="none"
		return false;
	}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 800;
	document.getElementById('show43').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used43').style.display="block";
	document.getElementById('q43div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	


function checkQues44() {
    var x = document.getElementById("ques44").value;
    
	if ((x.toLowerCase() == "muscle tissue")||(x.toLowerCase() == "muscle")) {
		num = num + 800;
		//alert(num);
		document.getElementById('used44').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q44div').style.display="none";
		document.getElementById('show44').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;		
		document.getElementById('par44').style.display="none"
		return false;
		}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 800;
	document.getElementById('show44').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used44').style.display="block";
	document.getElementById('q44div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	

function show41(){
	document.getElementById('q41div').style.display="block";
}

function show42(){
	var y = Math.floor((Math.random() * 10) + 1);
	alert(y)

	if (y <= 5){
		/*alert("y is less than 5")*/
		document.getElementById("q42div").style.display="block";	
		return false;
	}
	else{
		/*alert("y is greater than 5")*/
		document.getElementById('q42bdiv').style.display="block";
		return false;
	}
} 

function show43(){
	document.getElementById('q43div').style.display="block";
}

function show44(){
	document.getElementById('q44div').style.display="block";
}



//Fifth Row-----------------------------------------------------------
//--------------------------------------------------------------------

function checkQues51() {
    var x = document.getElementById("ques51").value;
    
	if ((x.toLowerCase() == "dendrites")||(x.toLowerCase() == "dendrite")) {
		num = num + 1000;
		//alert(num);
		document.getElementById('used51').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q51div').style.display="none";
		document.getElementById('show51').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par51').style.display="none"
		return false;		
    }
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 1000;
	document.getElementById('show51').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used51').style.display="block";
	document.getElementById('q51div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	
	
	
function checkQues52() {
    var x = document.getElementById("ques52").value;
    
	if (x.toLowerCase() == "nucleolus") {
		num = num + 1000;
		//alert(num);
		document.getElementById('used52').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q52div').style.display="none";
		document.getElementById('show52').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par52').style.display="none"
		return false;
		}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 1000;
	document.getElementById('show52').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used52').style.display="block";
	document.getElementById('q52div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	

function checkQues53() {
    var x = document.getElementById("ques53").value;
    
	if ((x.toLowerCase() == "electron")||(x.toLowerCase() == "electrons")) {
		num = num + 1000;
		//alert(num);
		document.getElementById('used53').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q53div').style.display="none";
		document.getElementById('show53').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par53').style.display="none"
		return false;
	}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 1000;
	document.getElementById('show53').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used53').style.display="block";
	document.getElementById('q53div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}

}	


function checkQues54() {
    var x = document.getElementById("ques54").value;
    
	if ((x.toLowerCase() == "glands")||(x.toLowerCase() == "gland")) {
		num = num + 1000;
		//alert(num);
		document.getElementById('used54').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q54div').style.display="none";
		document.getElementById('show54').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par54').style.display="none"
		return false;
		}
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 1000;
	document.getElementById('show54').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used54').style.display="block";
	document.getElementById('q54div').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	return false;
	}
	

}	

function show51(){
	document.getElementById('q51div').style.display="block";
}

function show52(){
	document.getElementById('q52div').style.display="block";
}

function show53(){
	document.getElementById('q53div').style.display="block";
}

function show54(){
	document.getElementById('q54div').style.display="block";
}

//---------------------------------------------------------------
//---------------------------------------------------------------

document.getElementById("scoreBox").write(num);
document.getElementById('scorePar').innerHTML = $ + num;
document.getElementById("scorePar").write(num);





//---------------------------------------------------------------
//---------------------------------------------------------------


function finished(){
	if(num == 12000){
	
	document.getElementById('close2').style.display="block";
	document.getElementById('mainFrame').style.display="none";
	document.getElementById('scoreOutLine').style.display="none";
	document.getElementById('wordBank').style.display="none";
	document.getElementById('instr').style.display="none";	
	document.getElementById('exit').style.display="none";
	}
	
	else{
	document.getElementById('close1').style.display="block";
	document.getElementById('mainFrame').style.display="none";
	document.getElementById('scoreOutLine').style.display="none";
	document.getElementById('wordBank').style.display="none";
	document.getElementById('instr').style.display="none";	
	document.getElementById('exit').style.display="none";
	}
}






