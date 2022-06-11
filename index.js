const express = require('express');
const app = express();
const port = process.env.PORT || 8091;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}
);
server.on("error", error => { console.log(error) });

app.get('/users', (req, res) => {
    console.log('GET /api/users respondiendo');
    res.json({msg : "versión 06"});
}
);
app.post('/users', (req, res) => {
    console.log('POST /api/users respondiendo');
    console.log(req.body)
    const email = req.body.mail
    const password = req.body.password
    const tc = req.body.tc
    /* res.json({
        "email" : req.body.mail,
        "password": req.body.password,
        "tc": req.body.tc
      }); */

    //res.send(`mail: ${email}, password: ${password}, tc: ${tc}`);
    return res.json({
        "email" : req.body.mail,
        "password": req.body.password,
        "tc": req.body.tc
    });
});