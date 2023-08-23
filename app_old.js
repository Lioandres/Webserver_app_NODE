const http=require('http')

http.createServer((req,res)=>{

    // console.log(req)
    // res.writeHead(200,{'content-type':'text/html;charset=UTF-8'})
    
    res.write('hola mundo')
    res.end()
})

.listen(8080)

console.log('broadcasting en el pueto', 8080)
