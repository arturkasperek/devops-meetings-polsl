const redis = require("redis");
const express = require('express')
const app = express()
const port = 3000

const client = redis.createClient({
    port: 6379,
    host: 'quizzical_hodgkin',
});

client.on("error", function(error) {
    console.error(error);
});

client.set("key", "value", redis.print);
client.get("key", redis.print);


app.get('/', (req, res) => {
    client.get("licznik", function(err, reply) {
        const licznik = reply;

        client.set('licznik', `${parseInt(licznik)+1}`);

        res.send(`Licznik = ${licznik}`)
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})