import express, { Application } from "express";
import { json } from "stream/consumers";
const app: Application = express();

app.get("/", (req, res) => {
    res.status(200).send("Welcome To LoanKone");
});
