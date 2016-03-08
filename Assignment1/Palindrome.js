var http = require('http');

function Palindrome(str){
	var len = str.length;
	
for(var i=0;i<Math.floor(len/2);i++){
	if(str[i]!=str[len-1-i]){
		return false;
	}
}
		return true;	
}

var number="123";

var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/plain"});
	var result = Palindrome(number);
	
	if(result == true){
		console.log("Given number/string is:"+""+number+" is palindrome");		
		res.end("Given number/string is:"+""+number+" is palindrome");
	}else{
		console.log("Given number/string is:"+""+number+" is not palindrome");		
		res.end("Given number/string is:"+""+number+" is not palindrome");
	}	
});

server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");

