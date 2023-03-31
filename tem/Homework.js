const http = require('http')
const https = require('https')

//const GET = process.env.PORT || 9818
const GET = process.env.GET || 9818
//----------------------------------------------------------------------
//const POST = process.env.PORT || 9818
const PORT = process.env.PORT || 9818

let server = http.createServer(onClientRequest)
    server.listen(PORT)

    console.log('Server stared Listening in ' + PORT)

    function onClientRequest(request, response)
    {
        response.writeHead(200)
        let method = request.method
        let requrl = request.url
        if(method === `GET`&& requrl ===`/hi`){
            response.write(`Hello on Get`)
        }
        else if(method === `POST` && requrl === `/hi`){
            response.write(`Hello on Post`)
        }
        else(
            response.write(`Nothing...`)
        )
        
        response.end()
    }
    
//ข้อ3-------------------------------------------------------------------
module.exports={
    key01:'covid'
}
 const func= require('./Homework.js')
 console.log(func.key01)

const covid=require('../covid19.js')
console.log(covid)

//ข้อ4------------------------------------------------------------------
