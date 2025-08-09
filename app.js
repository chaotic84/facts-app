import express from "express"
import axios from "axios"

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
   res.render("index.ejs");
})

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
})