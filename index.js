const express = require('express');
const PORT = process.env.PORT || 9000;
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/get-stuff', (req, res)=> {
    res.send({success: true, message: 'Here is some stuff from the back end'});

})

app.get('/', (req, res) => {
    res.send('<h1>The server is working</h1>');
});

app.listen(PORT, ()=> {
    console.log('Server running on Port:' + PORT);
});
