import { json } from "express";
import express from 'express';
import { v4 as uuidv4 } from "uuid";

let students = [
    {
        id: uuidv4(),
        name: "John Doe",
        age: 23
    }
];

const app = express();
app.use(json());

app.get("/students", (req, res) => {
    res.json(students);
})

app.post("/students", (req, res) => {
    const { name, age } = req.body;
    students.push({name, age});
    res.json({
        "message": "student added successfully"
    });
})

app.delete("/students", (req, res) => {
    const name = req.body.name;
    const index = students.indexOf(name);
    if (index > -1) {
        students.splice(4, 1);
    }
    const data = {
        "message": "delete_request"
    }
    res.json(data);
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});