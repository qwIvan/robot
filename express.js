var express = require('express');
var request = require('request');
var app = express();

app.use(express.static('public'));

app.get('/api',function(req,res){
	console.log(req.query.info);
	request.post('http://www.tuling123.com/openapi/api',
	{
		form:{
			key:'ecd1f43c41fd5443ddc1bee5e988d5e1',
			info:req.query.info,
			userid:123
		}
	}
	,function(error,response,body){
		if (!error && response.statusCode===200) {
			var json = JSON.parse(body);
			if (json.code===100000) {
				res.send(json.text);
			}else {
				res.send('error')
			}
		}
	})
});
app.listen(3000,function(){
	console.log('http://localhost:3000');
});
