const express = require('express');
const app = express();
const port = process.env.PORT || 8090;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}
);
server.on("error", error => { console.log(error) });

app.get('/users', (req, res) => {
    console.log('GET /api/users respondiendo');
    res.json({msg : "Hello fucking World de porqueria y sigo escribiendo!"});
}
);
app.post('/users', (req, res) => {
    console.log('POST /api/users respondiendo');
    const firstName = req.params.firstName;
    const lastName = req.params.lastName;
    const mail = req.params.mail;

    const usuario = {
        firstName,
        lastName,
        email,
      };
    res.json({usuario : usuario});
})