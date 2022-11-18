"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const riders = ['rider13', 'rider2', 'rider3'];
app.get("/", (req, res) => {
    console.log('api called');
    res.status(200).send("Hello World1144!");
});
app.get("/riders", (req, res) => {
    console.log('rider called');
    res.send(JSON.stringify(riders));
});
app.listen(5000, () => {
    console.log("Server started at port 5000...");
});
