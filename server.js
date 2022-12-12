let httpreq=require("http");
let file=require("fs")

let server=httpreq.createServer(function(req,res){
    // res.writeHead(200, {"Content-Type": "text/html"});
    // res.write("hello server");
    // res.end("");
})

server.listen(7000, function(){
    console.log("hello server port 7000");
})

server.on('request',(req,res)=>{
    // console.log("event fired");
    let url=req.url;
    if(url==="/login"){
        file.readFile("login.html",function(err,data){
            if(err){
                console.log(err);
            }
            else{
                res.writeHead(200, {"Content-Type":"text/html"});
                res.write(data);
                res.end("")
            }
        })
    }
})

server.on('request',(req,res)=>{
    // console.log("event fired");
    let url=req.url;
    if(url==="/index"){
        file.readFile("index.html",function(err,data){
            if(err){
                console.log(err);
            }
            else{
                res.writeHead(200, {"Content-Type":"text/html"});
                res.write(data);
                res.end("")
            }
        })
    }
})


// creating a login page

file.writeFile("login.html",
`
   <div>
   hello guys
   </div>

`,function(err){
if(err){
    console.log(err);
}
else{
    console.log("file created");
}
});


file.writeFile("index.html",
`
   <div>
   hello guys this is index page
   </div>

`,function(err){
if(err){
    console.log(err);
}
else{
    console.log("file created");
}
});