import express from "express"
import axios from "axios"

const PORT = 3000;

const app = express();

const API_URL = "https://api.chucknorris.io/jokes/random";

app.use(express.static('public'));

app.get("/", async (req, res) => {
   try {
      const response = await axios.get(API_URL);
      res.render("index.ejs", { content: response.data });
   }
   catch (error) {
      res.render("index.ejs", { error: JSON.stringify(error.response.data) });
   }
});

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
})