/** @format */

// Dictionary

function Dictionary() {
	this.dataStore = {};
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.display = display;
}

// function add
// take two args which are the key and value.
// the key is the index for the value element

function add(key, value) {
	this.dataStore[key] = value;
}

// function find
// takes one args which is the key
// return the value associated with it

function find(key) {
	return this.dataStore[key];
}

// function remove
// to remove a key value pair we use the delete build in function
// takes a reference to a key as its args

function remove(key) {
	delete this.dataStore[key];
}

// function to display all key value pairs

function display() {
	for (let key in this.dataStore) {
		console.log(`${key} ${this.dataStore[key]}`);
	}
}

const pbook = new Dictionary();

pbook.add("etoo", "123");
pbook.add("mia", "456");
pbook.add("sandra", "789");
console.log(`etoo's extension ${pbook.find("etoo")}`);
pbook.remove("mia");
pbook.display();
