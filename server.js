const exp = require('express'); 
const app = exp();

app.get('/', (req, res) =>{
    res.send('Hello Universe Once Again'); 
})
const port = 8080;
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
})