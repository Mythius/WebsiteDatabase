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
	const query = q => new Promise((resolve,reject)=>{
		con.query(q,(err,res)=>{
			if(err) reject(err);
			resolve(res);
		});
	});
	main(query);
});

async function main(query){
	await query('USE WEBDATA');
	let data = await query('SELECT * FROM players');
	console.log(data);
	process.exit(0);
}