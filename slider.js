localStorage["isDebate"] = true;

function saveTopic() {
	if(document.getElementbyID("fem").value === true) {
		localStorage["topic"] = "fem";
	} else if(document.getElementbyID("blm").value === true) {
		localStorage["topic"] = "blm";
	} else if(document.getElementbyID("imm").value === true) {
		localStorage["topic"] = "imm";
	} else if(document.getElemetbyID("wom").value === true) {
		localStorage["topic"] = "wom";
	} else {
		localStorage["topic"] = "lgbt";
	}
}

function setisLeftTrue() {
	localStorage["isLeft"] = true;
}

function setisLeftfalse() {
	localStorage["isLeft"] = false;]
}

function saveandTrue() {
	saveTopic();
	setisLeftTrue();
	localStorage["isLearn"] = undefined;
}

function saveandFalse() {
	saveTopic();
	setisLeftFalse();
	localStorage["isLearn"] = undefined;
}

function saveTopicNull() {
	saveTopic();
	localStorage["isLeft"] = undefined;
}
