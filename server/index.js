const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
 
const PORT = process.env.PORT || 5000;



app.post("/", (req, res) => {

    console.log(req.body);
})

app.listen(PORT, () => console.log(`Server listening @ port ${PORT}`));