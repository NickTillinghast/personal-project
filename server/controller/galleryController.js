module.exports = {
  userGalleries: async (req, res) => {
    const { user_id } = req.body;
    const galleries = await req.app.get("db").get_user_galleries([user_id]);
    return res.status(200).send(galleries);
  },
  getAllGalleries: async (req, res) => {
    const allGalleries = await req.app.get("db").get_all_galleries();
    return res.status(200).send(allGalleries);
  },
  //   addGalleries: async (req, res) => {
  //       const {}
  //   },
  deleteGallery: (req, res, next) => {
    const db = req.app.get("db");
    const { gallery_id } = req.body;
    db.delete_gallery(gallery_id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: " something went wrong.  cant delete" });
        console.log(err);
      });
  }
};
