import express, { Application } from "express";
import { json } from "stream/consumers";
const app: Application = express();

const riders = ['rider13', 'rider2', 'rider3'];

app.get("/", (req, res) => {
    console.log('api called')
    res.status(200).send("Hello World1144!");
});

app.get("/riders", (req, res) => {
    console.log('rider called');
    res.send(JSON.stringify(riders));
})

app.listen(5000, () => {
    console.log("Server started at port 5000...");
});