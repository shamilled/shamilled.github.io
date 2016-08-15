// Bring in left arrow 1 //
$(document).ready(function() {
	$("#rArrow").on('click', function() {
		$("img[alt='lArrow']").animate({
			left: '5%'
		}, 1
		);
	});
});

// Bring in tissue division //
$(document).ready(function() {
	$("#rArrow").on('click', function() {
		$("div[alt='tissDiv']").animate({
			left: '30%'
		}, 1000
		);
	});
});

// Move out cell division partially //  
$(document).ready(function() {
$("#rArrow").on('click', function() {
	$("div[alt='cellDiv']").animate({
		left: '-30%'
	}, 1000
	); 
});
});  

// Switch right arrows 1 and 2 //
$(document).ready(function() {
$("#rArrow").on('click', function() {
	$("img[alt='rArrow']").animate({
		left: '-100%'
	}, 1
	); 
});
});  

$(document).ready(function() {
$("#rArrow").on('click', function() {
	$("img[alt='rArrow2']").animate({
		left: '80%'
	}, 1
	); 
});
});  

// ---------------lArrow------------------ //

// Bring back cell division //
$(document).ready(function() {
	$("#lArrow").on('click', function() {
		$("div[alt='cellDiv']").animate({
			left: '33%'
		}, 1000
		);
	});
});

// Move out left arrow //
$(document).ready(function() {
	$("#lArrow").on('click', function() {
		$("img[alt='lArrow']").animate({
			left: '105%'
		}, 1
		);
	});
});

// Move out tissue division //
$(document).ready(function() {
	$("#lArrow").on('click', function() {
		$("div[alt='tissDiv']").animate({
			left: '110%'
		}, 1000
		);
	});
});

// Bring in right arrow 1 //
$(document).ready(function() {
	$("#lArrow").on('click', function() {
		$("img[alt='rArrow']").animate({
			left: '80%'
		}, 1
		);
	});
});

// Move out right arrow 2 //
$(document).ready(function() {
	$("#lArrow").on('click', function() {
		$("img[alt='rArrow2']").animate({
			left: '105%'
		}, 1
		);
	});
});



// -------------------------------------- //
// -------------------------------------- //


// Move cell division completely out //
$(document).ready(function() {
$("#rArrow2").on('click', function() {
	$("div[alt='cellDiv']").animate({
		left: '-180%'
	}, 1000
	); 
});
});  

// Move tissue division partially out //
$(document).ready(function() {
$("#rArrow2").on('click', function() {
	$("div[alt='tissDiv']").animate({
		left: '-35%'
	}, 1000
	); 
});
});  

// Bring in organs division //
$(document).ready(function() {
	$("#rArrow2").on('click', function() {
		$("div[alt='orgsDiv']").animate({
			left: '30%'
		}, 1000
		);
	});
});

// Move out left arrow //
$(document).ready(function() {
	$("#rArrow2").on('click', function() {
		$("img[alt='lArrow']").animate({
			left: '-100%'
		}, 1
		);
	});
});

// Bring in left arrow 2 //
$(document).ready(function() {
	$("#rArrow2").on('click', function() {
		$("img[alt='lArrow2']").animate({
			left: '5%'
		}, 1
		);
	});
});

// Switch right arrows 2 and 3 //
$(document).ready(function() {
$("#rArrow2").on('click', function() {
	$("img[alt='rArrow2']").animate({
		left: '-100%'
	}, 1
	); 
});
});  

// Bring in right arrow 3 on click of right arrow 2 //
$(document).ready(function() {
$("#rArrow2").on('click', function() {
	$("img[alt='rArrow3']").animate({
		left: '80%'
	}, 1
	); 
});
});  

// -------------------------------- //

// Bring back tissue division on click of left arrow 2 //
$(document).ready(function() {
	$("#lArrow2").on('click', function() {
		$("div[alt='tissDiv']").animate({
			left: '30%'
		}, 1000
		);
	});
});

// Move cell division back to partially visible on left arrow 2 //
$(document).ready(function() {
	$("#lArrow2").on('click', function() {
		$("div[alt='cellDiv']").animate({
			left: '-30%'
		}, 1000
		);
	});
});

// Move organs back out of view //
$(document).ready(function() {
$("#lArrow2").on('click', function() {
	$("div[alt='orgsDiv']").animate({
		left: '110%'
	}, 1000
	); 
});
});  

// Get rid of left arrow 2 //
$(document).ready(function() {
	$("#lArrow2").on('click', function() {
		$("img[alt='lArrow2']").animate({
			left: '110%'
		}, 1
		);
	});
});

// Get rid of right arrow 3 //
$(document).ready(function() {
	$("#lArrow2").on('click', function() {
		$("img[alt='rArrow3']").animate({
			left: '110%'
		}, 1
		);
	});
});

// Bring back left arrow 1 //
$(document).ready(function() {
	$("#lArrow2").on('click', function() {
		$("img[alt='lArrow']").animate({
			left: '5%'
		}, 1
		);
	});
});

// bring back right arrow 2 //
$(document).ready(function() {
	$("#lArrow2").on('click', function() {
		$("img[alt='rArrow2']").animate({
			left: '80%'
		}, 1
		);
	});
});




// ------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------- //

// -------------------------------- //

// Clicking left arrow 3 //
// Bring back organs division on click of left arrow 3 //
$(document).ready(function() {
	$("#lArrow3").on('click', function() {
		$("div[alt='orgsDiv']").animate({
			left: '30%'
		}, 1000
		);
	});
});

// Move tissue division back to partially visible on left arrow 3 //
$(document).ready(function() {
	$("#lArrow3").on('click', function() {
		$("div[alt='tissDiv']").animate({
			left: '-35%'
		}, 1000
		);
	});
});

// Move organ systems back out of view //
$(document).ready(function() {
$("#lArrow3").on('click', function() {
	$("div[alt='orgSysDiv']").animate({
		left: '110%'
	}, 1000
	); 
});
});  

// Get rid of left arrow 3 //
$(document).ready(function() {
	$("#lArrow3").on('click', function() {
		$("img[alt='lArrow3']").animate({
			left: '110%'
		}, 1
		);
	});
});


// Bring back left arrow 2 //
$(document).ready(function() {
	$("#lArrow3").on('click', function() {
		$("img[alt='lArrow2']").animate({
			left: '5%'
		}, 1
		);
	});
});

// Get rid of right arrow 4 //
$(document).ready(function() {
	$("#lArrow3").on('click', function() {
		$("img[alt='rArrow4']").animate({
			left: '110%'
		}, 1
		);
	});
});

// bring back right arrow 3 //
$(document).ready(function() {
	$("#lArrow3").on('click', function() {
		$("img[alt='rArrow3']").animate({
			left: '80%'
		}, 1
		);
	});
});




//-------------------------------------//
//-------------------------------------//


// Move tissue division completely out //
$(document).ready(function() {
$("#rArrow3").on('click', function() {
	$("div[alt='tissDiv']").animate({
		left: '-180%'
	}, 1000
	); 
});
});  

// Move organ division partially out //
$(document).ready(function() {
$("#rArrow3").on('click', function() {
	$("div[alt='orgsDiv']").animate({
		left: '-35%'
	}, 1000
	); 
});
});  

// Bring in organ system division //
$(document).ready(function() {
	$("#rArrow3").on('click', function() {
		$("div[alt='orgSysDiv']").animate({
			left: '30%'
		}, 1000
		);
	});
});

// Move out left arrow 2 //
$(document).ready(function() {
	$("#rArrow3").on('click', function() {
		$("img[alt='lArrow2']").animate({
			left: '-100%'
		}, 1
		);
	});
});

// Bring in left arrow 3 //
$(document).ready(function() {
	$("#rArrow3").on('click', function() {
		$("img[alt='lArrow3']").animate({
			left: '5%'
		}, 1
		);
	});
});

// Move out right arrow 3 //
$(document).ready(function() {
$("#rArrow3").on('click', function() {
	$("img[alt='rArrow3']").animate({
		left: '-100%'
	}, 1
	); 
});
});  

//Bring in right arrow 4 //
$(document).ready(function() {
$("#rArrow3").on('click', function() {
	$("img[alt='rArrow4']").animate({
		left: '80%'
	}, 1
	); 
});
}); 

//----------------------------------------------------------------------------------------------------------------------//
// --------------------------------------------------------------------------------------------------------------------- //

// Move organs division completely out //
$(document).ready(function() {
$("#rArrow4").on('click', function() {
	$("div[alt='orgsDiv']").animate({
		left: '-180%'
	}, 1000
	); 
});
});  

// Move organ system division partially out //
$(document).ready(function() {
$("#rArrow4").on('click', function() {
	$("div[alt='orgSysDiv']").animate({
		left: '-35%'
	}, 1000
	); 
});
});  

// Bring in person division //
$(document).ready(function() {
	$("#rArrow4").on('click', function() {
		$("div[alt='persDiv']").animate({
			left: '30%'
		}, 1000
		);
	});
});

// Move out left arrow 3 //
$(document).ready(function() {
	$("#rArrow4").on('click', function() {
		$("img[alt='lArrow3']").animate({
			left: '-100%'
		}, 1
		);
	});
});

// Bring in left arrow 4 //
$(document).ready(function() {
	$("#rArrow4").on('click', function() {
		$("img[alt='lArrow4']").animate({
			left: '5%'
		}, 1
		);
	});
});

// Move out right arrow 4 //
$(document).ready(function() {
$("#rArrow4").on('click', function() {
	$("img[alt='rArrow4']").animate({
		left: '-100%'
	}, 1
	); 
});
});  

// -------------------------------- //

// Bring back organ system division on click of left arrow 4 //
$(document).ready(function() {
	$("#lArrow4").on('click', function() {
		$("div[alt='orgSysDiv']").animate({
			left: '30%'
		}, 1000
		);
	});
});

// Move organs division back to partially visible on left arrow 4 //
$(document).ready(function() {
	$("#lArrow4").on('click', function() {
		$("div[alt='orgsDiv']").animate({
			left: '-35%'
		}, 1000
		);
	});
});

// Move person back out of view //
$(document).ready(function() {
$("#lArrow4").on('click', function() {
	$("div[alt='persDiv']").animate({
		left: '110%'
	}, 1000
	); 
});
});  

// Get rid of left arrow 4 //
$(document).ready(function() {
	$("#lArrow4").on('click', function() {
		$("img[alt='lArrow4']").animate({
			left: '110%'
		}, 1
		);
	});
});


// Bring back left arrow 3 //
$(document).ready(function() {
	$("#lArrow4").on('click', function() {
		$("img[alt='lArrow3']").animate({
			left: '5%'
		}, 1
		);
	});
});

// bring back right arrow 4 //
$(document).ready(function() {
	$("#lArrow4").on('click', function() {
		$("img[alt='rArrow4']").animate({
			left: '80%'
		}, 1
		);
	});
});


