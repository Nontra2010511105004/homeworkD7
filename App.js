const nreq = require('./lib/nreq')

// --------------------------------------------------------------------------
// 1. Can your module request data from app.js day 18 with GET method ?

nreq.request('GET','http','localhost', 9818,'/hi')

// --------------------------------------------------------------------------
// 2. Can your module request data from app day 18 with POST method ?

nreq.request('POST','http','localhost', 9818,'/hi')

// --------------------------------------------------------------------------
// 3. Can your module request data from covid19.th-stat.com ?

nreq.request('GET','https','covid19.ddc.moph.go.th',443,'/api/Cases/today-cases-all')
//---------------------------------------------------------------------------

let payload = { 
    provinceId: 1, 
    districtId: null, 
          year: 2021, 
         month: 2, 
      pageSize: 20, 
     pageIndex: 0
  }
let headers ={
    'Content-Type': 'application/json; charset=utf-8'
}

nreq.request('POST','https','orapiweb2.pttor.com',443,'/api/oilprice/search', payload )
