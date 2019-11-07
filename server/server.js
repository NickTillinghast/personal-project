require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const massive = require("massive");

app.use(express.json());
const {
  register,
  login,
  logout,
  userSession,
  getUser,
  admin
} = require("./controller/userController");

const {
  userGalleries,
  deleteGallery,
  getAllGalleries
} = require("./controller/galleryController");

const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;
const port = SERVER_PORT;

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 21
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  console.log("db connected");
  app.set("db", db);
});
app.get("/auth/get_user", getUser);
app.post("/auth/register", register);
app.post("/auth/login", login);
app.delete("/auth/logout", logout);
app.get("/auth/user_session", userSession);
app.delete("/auth/delete_gallery", deleteGallery);
app.get("/auth/get_user_galleries", userGalleries);
app.get("/auth/get_all_galleries", getAllGalleries);
app.post("/auth/admin", admin);

app.listen(port, () => console.log(`listening on port ${port}`));
