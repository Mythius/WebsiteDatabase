var mysql = require('mysql');
var con = mysql.createConnection({
	host: 'localhost',
	user: 'matthias',
	password: 'MS9543362'
});

con.connect(err=>{
	if(err){
		console.error(err);
		return;
	}
	console.log('Connected');
	con.query('USE WEBDATA',(err,res)=>{
		if(err) throw err;
		console.log('Result: ',res);
	});
});


