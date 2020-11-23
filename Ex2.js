/** @format */

function Dictionary() {
	this.dataStore = {};
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.display = display;
	this.count = count;
	this.clear = clear;
}

function add(key, value) {
	this.dataStore[key] = value;
}

function find(key) {
	return this.dataStore[key];
}

function remove(key) {
	delete this.dataStore[key];
}
function display() {
	for (let key in this.dataStore) {
		console.log(`${key} ${this.dataStore[key]}`);
	}
}

// function to know how many entries are in a dict

function count() {
	let number = 0;
	for (let key in this.dataStore) {
		number++;
	}
	return number;
}

function clear() {
	for (let key in this.dataStore) {
		delete this.dataStore[key];
	}
}

const pbook = new Dictionary();
// const pbook = [];
// pbook["nasser"] = 1;
// pbook["sammy"] = 2;
// console.log(`${pbook.length}`);

pbook.add("etoo", "123");
pbook.add("mia", "456");
pbook.add("sandra", "789");
pbook.add("jennifer", "213");
pbook.add("funkeh", "007");
console.log(`etoo's extension ${pbook.find("etoo")}`);
console.log(`number of entries is ${pbook.count()}`);
pbook.remove("mia");
pbook.display();
pbook.clear();
console.log(`Number of entries ${pbook.count()}`);
