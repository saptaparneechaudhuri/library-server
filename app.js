const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { bookData } = require("./data/bookInventory");
const { BookInventory } = require("./models/bookInventory");
const cors = require("cors");

require("dotenv/config");

const api = process.env.API_URL;

//routes
const bookInventoryRouter = require("./routes/books");
const completeInventoryRouter = require("./routes/completeInventory");
const bookIssues = require("./routes/issues");

//middleware
app.use(express.json());
app.use(`${api}/books`, bookInventoryRouter);
app.use(`${api}/completeinventory`, completeInventoryRouter);
app.use(`${api}/bookissue`, bookIssues);

app.use(cors());
app.options("*", cors());

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected.");
  })
  .catch((err) => {
    console.log(err);
  });

// process.env.PORT is for production port

var server = app.listen(process.env.PORT || 3000, () => {
  console.log(api);
  let port = server.address().port;
  console.log("server is running at port " + port);
});

// Insert many books into the library

// BookInventory.insertMany(bookData, function(err, docs) {
//     if (err){
//           return console.error(err);
//       } else {
//         console.log("Multiple documents inserted to BookInventory collection ");
//       }
// });
