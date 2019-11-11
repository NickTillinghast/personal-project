module.exports = {
  contact: (req, res, next) => {
    const { firstName, lastName, email, phone } = req.body;
    console.log(firstName, lastName, email, phone);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.EMAIL_NAME}`,
        password: `${process.env.EMAIL_PASSWORD}`
      }
    });
  }
};
