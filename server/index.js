const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const monk = require("monk");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = monk("localhost/moos");
const moos = db.get("moos");
 
const PORT = process.env.PORT || 5000;

app.post("/moos", (req, res) => {

    const moo = {

        content: req.body.moo.toString(),
        created: new Date()

    }

    console.log(moo);
    moos.insert(moo).then(dbResponse => res.json(dbResponse)).catch(console.error);

})

app.listen(PORT, () => console.log(`Server listening @ port ${PORT}`));