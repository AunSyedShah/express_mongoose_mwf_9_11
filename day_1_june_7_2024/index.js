import express from 'express';


const app = express();

app.get("/home", (req, res) => {

    const data = {
        "message": "get_request"
    }
    res.json(data);
})

app.post("/home", (req, res) => {
    const data = {
        "message": "post_request"
    }
    res.json(data);
})

app.delete("/home", (req, res) => {
    const data = {
        "message": "delete_request"
    }
    res.json(data);
})




app.listen(5000);