const express = require('express');
const app = express();
const port = process.env.PORT || 8090;
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
app.post('/users', (req, res) => {
    console.log('POST /api/users respondiendo');
    console.log(req.body)
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const usuario = {
        firstName,
        lastName,
        email,
      };
    res.json({usuario : usuario});
})