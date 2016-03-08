var http = require('http');



var fs = require("fs");
 console.log("\n *STARTING* \n");
// Get content from file
 var contents = fs.readFileSync("student.json");
// Define to JSON type

function readData(err,data){
	console.log(data);
}
fs.readFile('student.json','utf-8',readData);

//Write Data to JSON File
var myData=[
	{name:"John",
	subject:"Science",
	marks:73},
	{name:"rac",
	subject:"maths",
	marks:60}
]
var outputFilename = '/sudent.json';

fs.writeFile("student.json", JSON.stringify(myData, null, 2), function(err) {
    if(err) { return console.log(err); }
});

//update the values

//delete the file from student.json

delete outputFilename.name["John"];


