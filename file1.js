const http = require("http");
const fs = require("fs");
// fs.writeFileSync("read.txt","hey")

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { "content-type": "text/html" });
//   fs.readFile("index.html", function (error, data) {
//     if (error) {
//       res.write(404);
//       res.write("Error:File not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// });
// server.listen(8000,()=> {
//     console.log('listening')

// });


fs.readFile('sample.txt','utf-8',function(err,data){
    console.log(data)
});

fs.writeFile('shunt.js','console.log("done")', function(err){
    console.log("Data Saved")
})

fs.appendFile('shunt.js','console.log("don")', function(err){
        console.log("Data Saved")
     })
