const express = require('express');
const app = express();
const port = process.env.PORT || 8091;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}
);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
server.on("error", error => { console.log(error) });

app.get('/users', (req, res) => {
    console.log('GET /api/users respondiendo');
    res.json({msg : "Hello fucking World de porqueria y sigo escribiendo!"});
}
);
app.post('/v1/users', (req, res) => {
    console.log('POST /api/users respondiendo');
    console.log(req.body)
    const email = req.body.mail;
    const password = req.body.password;
    const tc = req.body.tc;

    const usuarioCrear = {
        email,
        password,
        tc,
      };
    res.json({datosNewUser : usuarioCrear});
})