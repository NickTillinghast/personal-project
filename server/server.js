require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const massive = require("massive");
const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");
const path = require("path");

// const auth = require("./middleware/authMiddleware");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.engine("handlebars", exphbs());
// app.set("view engine", "handlebars");

const {
  register,
  login,
  logout,
  userSession,
  admin
} = require("./controller/userController");

const {
  userGalleries,
  deleteGallery,
  getAllGalleries,
  editGallery,
  getGallery,
  addGallery
} = require("./controller/galleryController");

const nodemailer = require("nodemailer");
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

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

// app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/../build")));

massive(CONNECTION_STRING).then(db => {
  console.log("db connected");
  app.set("db", db);
});
// app.get("/auth/get_user", getUser);
app.post("/auth/register", register);
app.post("/auth/login", login);
app.delete("/auth/logout", logout);
app.get("/auth/user_session", userSession);
app.delete("/auth/delete_gallery/:gallery_id", deleteGallery);
app.get("/auth/get_user_galleries", userGalleries);
app.get("/auth/get_all_galleries", getAllGalleries);
app.post("/auth/admin", admin);
app.put("/auth/edit_gallery", editGallery);
app.get("/auth/get_gallery_info/:id", getGallery);
app.post("/auth/add_client_gallery", addGallery);
// app.get("/auth/gallery_user", auth.usersOnly, userGalleries);
// app.post("/auth/messages", (req, res) => {
//   res.header('Content-Type', 'application/json');
// client.messages
// .create({
//   from: process.env.TWILIO_PHONE_NUMBER,
//   to: req.body.to,
//   body: req.body.body
// })
// .then(() => {
//   res.send(JSON.stringify({ success: true }));
// })
// .catch(err => {
//   console.log(err);
//   res.send(JSON.stringify({ success: false }));
// });
// })

app.post("/auth/contact", (req, res) => {
  const { firstName, lastName, email, phone } = req.body;
  console.log(firstName, lastName, email, phone);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL_NAME,
    subject: "New Client Contact",
    html: `<body>
         <h1>New Client Contact</h1>
         <ul style='list-style-type: none; padding: 0px; font-size: 18px;'>
             <li>Name: ${firstName} ${lastName}</li>
             <li>Email: ${email}</li>
             <li>Phone: ${phone}</li>
         </ul>
         <body>`
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("error occurs");
    } else {
      console.log("email sent");
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
