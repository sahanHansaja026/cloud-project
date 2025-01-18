const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const postRouter = require("./routes/post");
const UserRouter = require("./routes/user");
const CommentRouter = require("./routes/comment");
const SearchRouter = require("./routes/search");
const ShowRouter = require("./routes/show");

app.use(bodyParser.json());
app.use(cors());

app.use(postRouter);
app.use(UserRouter);
app.use(CommentRouter);
app.use(SearchRouter);
app.use(ShowRouter);

const PORT = 7800;
const db_url =
  "mongodb+srv://sahanhansaja026:Mark15267@cluster0.t0p0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(db_url)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => console.log("Database connection error:", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
