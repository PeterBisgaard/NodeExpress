let fs = require("fs");
let http = require("http");

// Create http server
let myServer = http.createServer();


myServer.on('request', (req, res) => {
    //--------------------------------
    console.log('Client req: ' + req.url);
    
    let url = req.url;
    let myReadStream;

// Her vi håndterer kun GET request!!!

    switch(url){
        case "/":
        case "/index.html":   
        case "/index2.html":   
            // Write response object
            res.writeHead(200, {'Content-Type' : 'text/html'});
            myReadStream = fs.createReadStream("./public/index2.html", "utf-8");
            readAndWriteFile(myReadStream, res);
            break;
        case "/contact.html":
            // Write response object
            res.writeHead(200, {'Content-Type' : 'text/html'});
            myReadStream = fs.createReadStream("./public/contact.html", "utf-8");
            readAndWriteFile(myReadStream, res);
            break;
        case "/css/main.css":
            // Write response object
            res.writeHead(200, {'Content-Type' : 'text/css'});
            myReadStream = fs.createReadStream("./public/css/main.css", "utf-8");
            readAndWriteFile(myReadStream, res);
            break;   
        case "/js/main.js":
                // Write response object
                res.writeHead(200, {'Content-Type' : 'application/javascript'});
                myReadStream = fs.createReadStream("./public/js/main.js", "utf-8");
                readAndWriteFile(myReadStream, res);
                break;         
        default:
            
    }
    
    //--------------------------------
    

    console.log("\t***** End request ")
})

myServer.listen(8080, '127.0.0.1');
console.log('Server listen on port: 8080')


// Function used to read file and write is to res stream
function readAndWriteFile(myReadStream, res) {
    myReadStream.on("data", (chunk) => {
        res.write(chunk);
        console.log("\t***** New chunk ******");
    });
    myReadStream.on("end", (chunk) => {
        res.end();
        console.log("\t***** End sending ******");
    });
    myReadStream.on("Close", () => {
        console.log("\t***** Close *****");
    });
    myReadStream.on("error", (err) => {
        console.log("\t***** Error reading " + err);
    });
}
