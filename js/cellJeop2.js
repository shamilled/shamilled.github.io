function hide(){
	document.getElementById("rulz").style.display="none";
	document.getElementById('mainFrame').style.display="block";
	document.getElementById('scoreOutLine').style.display="block";
	document.getElementById('wordBank').style.display="block";
	document.getElementById('instr').style.display="block";	
	document.getElementById('exit1').style.display="block";
}

var num = 0;

//First Row----------------------
//------------------------------

function checkQues11() {
    var x = document.getElementById("ques11").value;
    
	if ((x.toLowerCase() == "cells")||(x.toLowerCase() == "cell")) {
		num = num + 200;
		//alert(num);
		document.getElementById('used11').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q11div').style.display="none";
		document.getElementById('show11').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par11').style.display="none"
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
	return false;
	}

}	
	
	
function checkQues12() {
    var x = document.getElementById("ques12").value;
    
	if ((x.toLowerCase() == "mitochondria")||(x.toLowerCase() == "mitochondrion")) {
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
    
	if ((x.toLowerCase() == "organs")||(x.toLowerCase() == "organ")) {
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



function show11(){
	document.getElementById('q11div').style.display="block";
}

function show12(){
	document.getElementById('q12div').style.display="block";
}

function show13(){
	document.getElementById('q13div').style.display="block";
}


//Second Row-------------------------------
//-----------------------------------------

function checkQues21() {
    var x = document.getElementById("ques21").value;
    
	if ((x.toLowerCase() == "living organisms")||(x.toLowerCase() == "living organism")||(x.toLowerCase() == "organism")||(x.toLowerCase() == "organisms")) {
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
    
	if ((x.toLowerCase() == "rough endoplasmic reticulum")||(x.toLowerCase() == "rough er")) {
		num = num + 400;
		//alert(num);
		document.getElementById('used22').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q22div').style.display="none";
		document.getElementById('show22').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par22').style.display="none";
		document.getElementById('par22b').style.display="none";
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
	document.getElementById('par22b').style.display="none";
	return false;
	}

}	

function checkQues22b() {
    var x = document.getElementById("ques22b").value;
    
	if (x.toLowerCase() == "cytoplasm") {
		num = num + 400;
		//alert(num);
		document.getElementById('used22').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q22bdiv').style.display="none";
		document.getElementById('show22').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par22').style.display="none";
		document.getElementById('par22b').style.display="none";
		return false;
    }
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 400;
	document.getElementById('show22').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used22').style.display="block";
	document.getElementById('q22bdiv').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	document.getElementById('par22').style.display="none";
	return false;
	}

}	



function checkQues23() {
    var x = document.getElementById("ques23").value;
    
	if ((x.toLowerCase() == "organ systems")||(x.toLowerCase() == "organ system")) {
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

	

function show21(){
	document.getElementById('q21div').style.display="block";
}

function show22(){
	var y = Math.floor((Math.random() * 10) + 1);
	/* alert(y) */

	if (y <= 5){
		/*alert("y is less than 5")*/
		document.getElementById("q22div").style.display="block";	
		return false;
	}
	else{
		/*alert("y is greater than 5")*/
		document.getElementById('q22bdiv').style.display="block";
		return false;
	}
}

function show23(){
	document.getElementById('q23div').style.display="block";
}







//Third Row-----------------------------------------------------------
//--------------------------------------------------------------------

function checkQues31() {
    var x = document.getElementById("ques31").value;
    
	if ((x.toLowerCase() == "bone cells")||(x.toLowerCase() == "bone")) {
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
    
	if (x.toLowerCase() == "nucleus") {
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
    
	if ((x.toLowerCase() == "nervous tissue")||(x.toLowerCase() == "nervous")) {
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




function show31(){
	document.getElementById('q31div').style.display="block";
}

function show32(){
	document.getElementById('q32div').style.display="block";
}

function show33(){
	document.getElementById('q33div').style.display="block";
}





//Fourth Row-----------------------------------------------------------
//--------------------------------------------------------------------

function checkQues41() {
    var x = document.getElementById("ques41").value;
    
	if ((x.toLowerCase() == "fat cell")||(x.toLowerCase() == "fat cells")||(x.toLowerCase() == "fat")) {
		num = num + 800;
		//alert(num);
		document.getElementById('used41').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q41div').style.display="none";
		document.getElementById('show41').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par41').style.display="none";
		document.getElementById('par41b').style.display="none";
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
	document.getElementById('par41b').style.display="none";
	return false;
	}

}	

function checkQues41b() {
    var x = document.getElementById("ques41b").value;
    
	if ((x.toLowerCase() == "nerve cell")||(x.toLowerCase() == "nerve cells")||(x.toLowerCase() == "nerve")) {
		num = num + 800;
		//alert(num);
		document.getElementById('used41').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q41bdiv').style.display="none";
		document.getElementById('show41').style.display="none";	
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par41').style.display="none";
		document.getElementById('par41b').style.display="none";
		return false;		
    }
	else{
	//alert("Wrong name");
	//alert(num);
	num = num - 800;
	document.getElementById('show41').style.display="none";
	document.getElementById('correct').style.display="none";
	document.getElementById('used41').style.display="block";
	document.getElementById('q41bdiv').style.display="none";
	document.getElementById('scoreBox').innerHTML = "$" + num;
	document.getElementById('par41').style.display="none";
	return false;
	}

}
	
	
function checkQues42() {
    var x = document.getElementById("ques42").value;
    
	if ((x.toLowerCase() == "golgi apparatus")||(x.toLowerCase() == "golgi bodies")) {
		num = num + 800;
		//alert(num);
		document.getElementById('used42').style.display="block";
		document.getElementById('correct').style.display="block";
		document.getElementById('q42div').style.display="none";
		document.getElementById('show42').style.display="none";		
		document.getElementById('scoreBox').innerHTML = "$" + num;
		document.getElementById('par42').style.display="none"
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
	return false;
	}

}	

function checkQues43() {
    var x = document.getElementById("ques43").value;
    
	if ((x.toLowerCase() == "organs")||(x.toLowerCase() == "organ")) {
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




function show41(){
	var y = Math.floor((Math.random() * 10) + 1);
	/*alert(y)*/

	if (y <= 5){
		/*alert("y is less than 5")*/
		document.getElementById("q41div").style.display="block";	
		return false;
	}
	else{
		/*alert("y is greater than 5")*/
		document.getElementById('q41bdiv').style.display="block";
		return false;
	}
}

function show42(){
	document.getElementById('q42div').style.display="block";
}

function show43(){
	document.getElementById('q43div').style.display="block";
}


//---------------------------------------------------------------
//---------------------------------------------------------------

document.getElementById("scoreBox").write(num);
document.getElementById('scorePar').innerHTML = $ + num;
document.getElementById("scorePar").write(num);





//---------------------------------------------------------------
//---------------------------------------------------------------


function finished1(){
	document.getElementById('mainFrame').style.display="none";
	document.getElementById('scoreOutLine').style.display="none";
	document.getElementById('wordBank').style.display="none";
	document.getElementById('instr').style.display="none";	
	document.getElementById('exit1').style.display="none";
	document.getElementById('previous').style.display="none";
	document.getElementById('finish1').style.display="block";
	document.getElementById('yes').style.display="block";
	document.getElementById('no').style.display="block";
}

function return1(){
	document.getElementById('mainFrame').style.display="block";
	document.getElementById('scoreOutLine').style.display="block";
	document.getElementById('wordBank').style.display="block";
	document.getElementById('instr').style.display="block";	
	document.getElementById('exit1').style.display="block";
	document.getElementById('previous').style.display="block";
	document.getElementById('finish1').style.display="none";
	document.getElementById('yes').style.display="none";
	document.getElementById('no').style.display="none";
}

function finished(){
	if(num == 6000){
	
	document.getElementById('close2').style.display="block";
	document.getElementById('mainFrame').style.display="none";
	document.getElementById('scoreOutLine').style.display="none";
	document.getElementById('wordBank').style.display="none";
	document.getElementById('instr').style.display="none";	
	document.getElementById('previous').style.display="none";
	document.getElementById('finish1').style.display="none";
	document.getElementById('yes').style.display="none";
	document.getElementById('no').style.display="none";
	}
	
	else{
	document.getElementById('close1').style.display="block";
	document.getElementById('mainFrame').style.display="none";
	document.getElementById('scoreOutLine').style.display="none";
	document.getElementById('wordBank').style.display="none";
	document.getElementById('instr').style.display="none";	
	document.getElementById('previous').style.display="none";
	document.getElementById('finish1').style.display="none";
	document.getElementById('yes').style.display="none";
	document.getElementById('no').style.display="none";
	}
}