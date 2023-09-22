const express = require("express");
const app = express();

app.all("/", (req, res) => {
  res.send("Bot starting");
 });


function keepAlive() {
  app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
  });
}



module.exports = keepAlive;
