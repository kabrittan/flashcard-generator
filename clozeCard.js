var basicCard = require('./basicCard');
var fs = require('fs');
const inquirer = require('inquirer');
let newCard = "";
let newPartial = "";
let booleanCheck = true;


var ClozeCard = function() {
	this.create = function (front, back) {
		newCard = basicCard(front, back);
		var logTxt = 
			"=====================" +
			"\nFront of Card: " + newCard.front +
			"\nBack of Card: " + newCard.back +
			"\n=====================\n";
		fs.appendFile("log.txt", logTxt, 'utf8', function(err){
			if(err) throw err;
			console.log("Card Added!\n");
		});
		this.partial();
	};
	this.show = function () {
		fs.readFile("log.txt", "utf8", function(error, data) {
			if (data == null) {
				console.log("There are no cards yet!");
			} else {
				console.log(data);
			}
		});
	};
	this.partial = function () {
		var partialTxt = 
			"=====================" +
			"\n..." + newCard.front +
			"\n=====================\n";
		fs.appendFile("flashcard.txt", partialTxt, 'utf8', function(err){
			if(err) throw err;
			console.log("Flash Added!\n");
		});
	};
	this.flashcard = function () {
		fs.readFile("flashcard.txt", "utf8", function(error, data) {
			if (data == null) {
				console.log("There are no flashcards yet!");
				booleanCheck = false;
			} else {
				console.log("\n");
				console.log(data);
				booleanCheck = true;
			}
		});
	};
}

module.exports = ClozeCard;