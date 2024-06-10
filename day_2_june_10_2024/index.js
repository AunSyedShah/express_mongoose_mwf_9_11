import { json } from "express";
import express from 'express';

let students = [];

const app = express();
app.use(json());

app.get("/students", (req, res) => {
    res.json(students);
})

app.post("/students", (req, res) => {
    const data = req.body.name;
    students.push(data);
    res.json({
        "message": "student added successfully"
    });
})

app.delete("/students", (req, res) => {
    const data = {
        "message": "delete_request"
    }
    res.json(data);
})

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});