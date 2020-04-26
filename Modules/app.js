let express = require('express');
const path = require('path');
let app = express();

// for scripts
app.use(express.static('src'))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(4000,function(){
    console.log("servers")
})