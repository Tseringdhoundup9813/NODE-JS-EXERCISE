const http = require("http");
const fs = require("fs/promises");

const PORT = 3001;

const server = http.createServer(async(req,res)=>{
    const contentBuffer = await fs.readFile(__dirname + "/text.txt");
    
     res.statusCode = 200;
     res.setHeader("Content-type","text/plain");
     res.end(contentBuffer);
});

server.listen(PORT,()=>{
    console.log(`server has started on port ${PORT}`);
})