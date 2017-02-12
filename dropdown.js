localStorage["isDebate"] = false;


function save(key) {
	localStorage["topic"] = key;
	localStorage["isLeft"] = undefined;
}

function savef(key) {
	save(key);
	localStorage["isLearn"] = false;
}

function savet(key) {
	save(key);
	localStorage["isLearn"] = true;
}