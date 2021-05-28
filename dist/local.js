const express = require("express");
const bodyParser = require("body-parser");
const { mongoose } = require("./db.js");
var citoyenController = require("./controllers/localController.js");


const https = require('https')
const path = require('path')
const fs = require('fs')




var app = express();



//hadchi zedtou 3la wd sécurité 
const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, 'cert2', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert2', 'cert.pem')),
  },
  app
)


app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/app/"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/app/index.html");
});
const PORT=3003;
sslServer.listen(PORT, () => console.log('Secure server 🚀🔑 on port 3443'))
/*app.listen(PORT, () => {
  console.log("server started at port "+PORT);
});*/

app.use("/", citoyenController);

app.use(function (req, res) {
  res.status(404).sendFile(process.cwd()+"/app/index.html")
})
