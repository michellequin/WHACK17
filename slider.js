sessionStorage["isLearn"] = false;

function saveTopic() {
	if(document.getElementbyID("fem").value === true) {
		sessionStorage["topic"] = "fem";
	} else if(document.getElementbyID("blm").value === true) {
		sessionStorage["topic"] = "blm";
	} else if(document.getElementbyID("imm").value === true) {
		sessionStorage["topic"] = "imm";
	} else if(document.getElementbyID("wom").value === true) {
		sessionStorage["topic"] = "wom";
	} else {
		sessionStorage["topic"] = "lgbt";
	}
}

function setisLeftTrue() {
	sessionStorage["isLeft"] = true;
}

function setisLeftfalse() {
	sessionStorage["isLeft"] = false;]
}

function saveandTrue() {
	saveTopic();
	setisLeftTrue();
}

function saveandFalse() {
	saveTopic();
	setisLeftFalse();
}
