const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //solution 1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //solution 2
  const readAble = fs.createReadStream("test-file.txt");
  readAble.on("data", (piece) => {
    res.write(piece);
  });
  readAble.on("end", () => {
    res.end();
  });
  readAble.on("error", (err) => {
    console.log(err);
    res.statusCode = 6000;
    res.end("This File Not Found.....");
  });
});

server.listen(9000, "127.0.0.1", () => {
  console.log("yes server listening on");
});
