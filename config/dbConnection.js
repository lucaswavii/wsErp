var mysql = require('mysql');

var connMysql = function() {
	return mysql.createConnection({
			host : 'localhost',
			user: 'root',
			password: 'Wa180279',
			database: 'wserp'
	});
}

module.exports = function(){
	return connMysql;
}
