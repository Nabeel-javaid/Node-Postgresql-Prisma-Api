import http from "http"

const server = http.createServer(async(req,res) => 
{
    if(req.method === "GET" && req.url === '/')
    {
        res.statusCode(200)
        res.end
    }
})

server.listen(3000, () => 
{
    console.log("Listening on port 3000 lmaaaaaaaaooooooo")
})