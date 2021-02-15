const express = require("express");
const app = express();

app.get("/", (req,res) => {
  res.setHeader("Content-Security-Policy", "frame-src https://bit.ly; report-uri /report");
  res.render("index");
});

app.post("/report", (req,res) => {
  console.log(req.body)
  return res.send('CSP fail: Report received');
});

app.listen(3000, () => console.log(`App listening on port ${port}!`));
