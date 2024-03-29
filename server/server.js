// require("dotenv").config();
// const express = require("express");
// const app = express();
// const session = require("express-session");
// const massive = require("massive");
// const bodyParser = require("body-parser");
// const path = require("path");

// const auth = require("./middleware/authMiddleware");
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(`${__dirname}/../build`));
// // app.use(express.static(path.join(__dirname, "/../build")));

// const {
//   register,
//   login,
//   logout,
//   userSession,
//   admin
// } = require("./controller/userController");

// const {
//   userGalleries,
//   deleteGallery,
//   getAllGalleries,
//   editGallery,
//   getGallery,
//   addGallery
// } = require("./controller/galleryController");

// const nodemailer = require("nodemailer");

// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
// const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;
// const port = SERVER_PORT;

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: SESSION_SECRET,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 21
//     }
//   })
// );

// // massive({
// //   connectionString: CONNECTION_STRING,
// //   ssl: {
// //     rejectUnauthorized: false,
// //   },
// // })
// //   .then((db) => {
// //     app.set('db', db);
// //   })
// //   .catch((err) => console.log(err));
// // massive(
// //   CONNECTION_STRING
// // ).then(db => {app.set("db", db)});
// app.use("/public", express.static(path.join(__dirname, "public")));
// // app.use(express.static(path.join(__dirname, "/../build")));

// massive(process.env.CONNECTION_STRING).then(db => {
//   console.log("db connected");
//   app.set("db", db);
// });



// app.post("/auth/register", register);
// app.post("/auth/login", login);
// app.delete("/auth/logout", logout);
// app.get("/auth/user_session", userSession);
// app.delete("/auth/delete_gallery/:gallery_id", deleteGallery);
// app.get("/auth/get_user_galleries", userGalleries);
// app.get("/auth/get_all_galleries", getAllGalleries);
// app.post("/auth/admin", admin);
// app.put("/auth/edit_gallery", editGallery);
// app.get("/auth/get_gallery_info/:id", getGallery);
// app.post("/auth/add_client_gallery", addGallery);
// app.get("/auth/gallery_user", auth.usersOnly, userGalleries);


// app.post("/auth/contact", (req, res) => {
//   const { firstName, lastName, email, phone, info } = req.body;
//   console.log(firstName, lastName, email, phone, info);

//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_NAME,
//       pass: process.env.EMAIL_PASSWORD
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   });
//   // app.get("*", (req, res) => {
//   //   res.sendFile(path.join(__dirname, "../build/index.html"));
//   // });

//   let mailOptions = {
//     from: email,
//     to: process.env.EMAIL_NAME,
//     subject: "New Client Contact",
//     html: `<body>
//          <h1>New Client Contact</h1>
//          <ul style='list-style-type: none; padding: 0px; font-size: 18px;'>
//              <li>Name: ${firstName} ${lastName}</li>
//              <li>Email: ${email}</li>
//              <li>Phone: ${phone}</li>
//              <li>Info: ${info}</li>

//          </ul>
//          <body>`
//   };

//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       console.log("there was an error with sending email");
//     } else {
//       console.log("email sent");
//     }
//   });
// });


// app.listen(port, () => console.log(`listening on port ${port}`));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });