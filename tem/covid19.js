const http = require('http')
const https = require('https')
const PORT = process.env.PORT || 9818

const options = {
    host: `covid19.ddc.moph.go.th`,
    port: 443,
    method: `GET`,
    path: `/api/Cases/today-cases-all`,
}
let req = https.request (options,(resp) => {
    let respdata =``

    resp.on(`data`,(chunk)=>{
        respdata += chunk.toString()
    })
    resp.on(`end`,function(){
        let resp= convertStringtoJSON(respdata)
        console.log(resp)
    })
    
})
req.end()
function convertStringtoJSON(data)
{
    try{
        return JSON.parse(data)
    }catch(excp){
        return data
    }
}