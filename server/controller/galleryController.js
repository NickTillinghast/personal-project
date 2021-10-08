// module.exports = {
//   userGalleries: async (req, res) => {
//     const { user_id } = req.session.user;
//     const db = await req.app.get("db");
//     const galleries = await db.get_user_galleries([user_id]);
//     return res.status(200).send(galleries);
//   },
//   getAllGalleries: async (req, res) => {
//     const { user_id } = req.session.user;
//     const db = await req.app.get("db");
//     const allGalleries = await db.get_all_galleries([user_id]);
//     return res.status(200).send(allGalleries);
//   },

//   deleteGallery: (req, res, next) => {
//     const db = req.app.get("db");

//     const { gallery_id } = req.params;
//     console.log(req.params);
//     db.delete_gallery(gallery_id)
//       .then(res.sendStatus(200))
//       .catch(err => console.log(err));
//   },
//   editGallery: async (req, res, next) => {
//     const db = req.app.get("db");
//     console.log("body:", req.body);
//     const {
//       gallery_id,
//       gallery_name,
//       gallery_date,
//       gallery_link,
//       gallery_image,
//       user_id
//     } = req.body;
//     const gallery = await db.updateGallery([
//       gallery_id,
//       gallery_name,
//       gallery_date,
//       gallery_link,
//       gallery_image,
//       user_id
//     ]);
//     console.log("gallery:", gallery);
//     return res.status(200).send(gallery);
//   },
//   getGallery: async (req, res, next) => {
//     const db = await req.app.get("db");
//     const { id } = req.params;
//     const gallery = await db.get_gallery_info(id);
//     return res.status(200).send(gallery);
//   },
//   addGallery: async (req, res, next) => {
//     const db = req.app.get("db");
//     const {
//       gallery_name,
//       gallery_date,
//       gallery_link,
//       gallery_image,
//       user_id
//     } = req.body;
//     const gallery = await db.add_client_gallery([
//       gallery_name,
//       gallery_date,
//       gallery_link,
//       gallery_image,
//       user_id
//     ]);

//     console.log("gallery:", gallery);
//     return res.status(200).send(gallery);
//   }
// };
