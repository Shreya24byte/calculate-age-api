const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    const path = req.url;
    console.log("path", path);
    const queryParamsObject = url.parse(path, true).query;
    console.log(queryParamsObject);
    //Routes
    if (path.includes("age")) {
      const month = queryParamsObject.month;
      const date = queryParamsObject.date;
      const year = queryParamsObject.year;
      const name = queryParamsObject.name;
      const today = new Date();
      const dob = new Date(year, month, date);
      //Age calculation
      const age = today.getFullYear() - dob.getFullYear();
      console.log("age", age);
      const dobMonth = dob.getMonth();
      const dobDate = dob.getDate();
      const currentDate = today.getDate();
      const currentMonth = today.getMonth();
      if (currentMonth > dobMonth) {
        console.log(age);
        res.setHeader("Content-Type", "text/html");
          res.write(`<p>Hello ${name}</p>
                    <p>You are currently ${age} years old`);
        res.end();
      } else if (currentMonth == dobMonth) {
        if (currentDate >= dobDate) {
          console.log(age);
          res.setHeader("Content-Type", "text/html");
          res.write(`<p>Hello ${name}</p>
                    <p>You are currently ${age} years old`);
          res.end();
        } else {
          age--;
          console.log(age);
          res.setHeader("Content-Type", "text/html");
          res.write(`<p>Hello ${name}</p>
                    <p>You are currently ${age} years old`);
          res.end();
        }
      } else {
        age--;
        console.log(age);
        res.setHeader("Content-Type", "text/html");
          res.write(`<p>Hello ${name}</p>
                    <p>You are currently ${age} years old`);
        res.end();
      }
    } else {
      res.write("error");
      res.end();
    }
  })
  .listen(8080);
