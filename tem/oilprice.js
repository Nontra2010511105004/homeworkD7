const http = require('http')
const https = require('https')

const options = {
    host:`orapiweb2.pttor.com`,
    port:443,
    method:'POST',
    path:`/api/oilprice/search`,
    headers:{
        'Content-Type':'application/json; charset=utf-8'
    }
}

let payload ={
    provinceId:1,
    districtId:null,
    year:2021,
    month:2,
    pageSize:20,
    pageIndex:0
}

payload = JSON.stringify(payload)

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
req.write(payload)
req.end()
function convertStringtoJSON(data)
{
    try{
        return JSON.parse(data)
    }catch(excp){
        return data
    }
}