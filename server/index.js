const express = require('express')
const app = express()
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ironsource'
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))

connection.connect()

app.get('/sql', (req, res) => {
  const myQuery = "SELECT App_id, SUM(impressions), SUM(clicks) FROM Application_statistics \
                  WHERE Date between '2018-01-01' and '2018-01-05' \
                  GROUP BY App_id";

  //TODO: return promise to be used

  const queryData = () => {}
  // let queryData;

  connection.query(myQuery, function (err, data, fields) {
    if (err) throw err
    // queryData = data;
    // console.log('querydata inside', queryData);
    console.log('The data is: ', data)
  })

  // console.log('query data is' + queryData);
  res.send('query data is in terminal')

});

/*
NOTE: connection.end throws error Cannot enqueue Query after invoking quit
refer https://stackoverflow.com/questions/20692989/node-mysql-where-does-connection-end-go
*/
// connection.end()
