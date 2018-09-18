var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ironsource'
});

connection.connect()

const myQuery = "SELECT App_id, SUM(impressions), SUM(clicks) FROM Application_statistics \
                WHERE Date between '2018-01-01' and '2018-01-05' \
                GROUP BY App_id";

connection.query(myQuery, function (err, result, fields) {
  if (err) throw err

  console.log('The result is: ', result)
})

connection.end()
