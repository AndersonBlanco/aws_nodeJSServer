const exp = require('express'); 
const app = exp();

app.get('/', (req, res) =>{
    res.send('Hello Universe'); 
})
const port = 22;
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
})