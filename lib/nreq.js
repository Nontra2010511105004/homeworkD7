module.exports = { key1:'try',key2,request}
const http = require('http')
const https = require('https')
const PORT = process.env.PORT || 9818

function key2(){
    console.log()
}

    //covid
    function request(method,protocal,host,port,path,payload){
    const options = {
        method: `GET`,
        host: `covid19.ddc.moph.go.th`,
        port: 443,
        path: `/api/Cases/today-cases-all`,
    }
        
    //oil
    function request (method,protocal,host,port,path,payload,headers){
    const options = {
        method:'POST',
        host:`orapiweb2.pttor.com`,
        port:443,
        path:`/api/oilprice/search`,
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        }
        }
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

}
if(method === `POST`){
   req.write(payload)
}
    /*let payload ={
        provinceId:1,
        districtId:null,
        year:2021,
        month:2,
        pageSize:20,
        pageIndex:0
    }
    payload = JSON.stringify(payload)*/
    req.end()
    //req.write(payload)


    

function convertStringtoJSON(data)
{
    try{
        return JSON.parse(data)
    }catch(excp){
        return data
    }
}