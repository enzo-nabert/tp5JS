const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send({
        a: 1,
        b: "hello"
    })
})

app.listen(process.env.PORT, () => {
    console.log("running")
});