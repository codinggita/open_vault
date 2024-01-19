const express = require('express');

let PORT = process.env.PORT || 5500;
const app = express();

app.get("/", (req, res)=>{
    res.send("OpenVault");
});

app.listen(PORT, ()=>{
    console.log(`Server is listening at PORT ${PORT}.`);
    console.log(`Go Live: http://localhost:5500/`);
});