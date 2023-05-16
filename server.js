const exp = require('express'); 
const app = exp();

app.get('/', (req, res) =>{
   res.sendFile('root/home.html');

});
const port = 8080;
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
})