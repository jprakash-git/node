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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});