let express = require('express');
let app = express();

// for scripts
app.use(express.static('src'))

app.get('*',(req,res)=>{
    res.sendfile('index.html')
})

app.listen(3000,function(){
    console.log("servers")
})