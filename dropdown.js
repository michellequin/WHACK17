sessionStorage["isDebate"] = false;


function save(key) {
	sessionStorage["topic"] = key;
	sessionStorage["isLeft"] = undefined;
}

function savef(key) {
	save(key);
	sessionStorage["isLearn"] = false;
}

function savet(key) {
	save(key);
	sessionStorage["isLearn"] = true;
}