const express = require(`express`);
const mongoose = require(`mongoose`);


const auth = require(`./routes/api/auth`);
const profiles = require(`./routes/api/profiles`);
const comments = require(`./routes/api/comments`);


const app = express();
const db = require(`./config/keys`).mongoURI;


mongoose
  .connect(db, { useNewUrlParser: true })
  .then( () => console.log(`MongoDB Connected`) )
  .catch( err => console.log(err) );

app.get(`/`, (req, res) => {
  res.send(`Hello World`);
});


// Use Routes
app.use(`/api/auth`, auth);
app.use(`/api/profiles`, profiles);
app.use(`/api/comments`, comments);

const port = process.env.PORT || 5000;


app.listen( port, () => console.log(`Server running on port ${port}.`) );
