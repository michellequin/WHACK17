sessionStorage["isDebate"] = true;

function saveTopic() {
	if(document.getElementbyID("fem").value === true) {
		sessionStorage["topic"] = "fem";
	} else if(document.getElementbyID("blm").value === true) {
		sessionStorage["topic"] = "blm";
	} else if(document.getElementbyID("imm").value === true) {
		sessionStorage["topic"] = "imm";
	} else if(document.getElemetbyID("wom").value === true) {
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
n
function saveandTrue() {
	saveTopic();
	setisLeftTrue();
	sessionStorage["isLearn"] = undefined;
}

function saveandFalse() {
	saveTopic();
	setisLeftFalse();
	sessionStorage["isLearn"] = undefined;
}

function saveTopicNull() {
	saveTopic();
	sessionStorage["isLeft"] = undefined;
}
