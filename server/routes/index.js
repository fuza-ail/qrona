const router = require("express").Router();

// MOBILE
router.post("/login", (req, res) => res.send("login"));
router.post("/register", (req, res) => res.send("register"));
router.post("/location", (req, res) => res.send("get user location from gps"));
router.get("/users/:id", (req, res) => res.send("get user detail"));
router.put("/users/:id", (req, res) => res.send("edit user detail"));
router.get("/checkin", (req, res) => res.send("scan barcode to check in"));
router.get("/checkout", (req, res) => res.send("scan barcode to check out"));
router.post("/hotplace", (req, res) => res.send("create and generate barcode"));
router.get("/hotplace", (req, res) => res.send("get user hotplaces"));
router.get("/hotplace/:id", (req, res) => res.send("get qr of the hotplace"));
router.put("/hotplace/:id", (req, res) => res.send("edit hotplace data"));
router.delete("/hotplace/:id", (req, res) => res.send("delete hotplace data"));
router.get("/download", (req, res) => res.send("download the qr"));
router.get("/map", (req, res) => res.send("fetching map"));

// WEB APP
router.post("/loginadmin", (req, res) => res.send("login as admin"));
router.get("/users", (req, res) => res.send("get all user data"));
// router.get("/users/:id", (req, res) => res.send("get user data by id"));
router.post("/loginadmin", (req, res) => res.send("login as admin"));
router.put("/reghotplace", (req, res) => res.send("get all hotplace data"));
router.get("/reghotplace/:id", (req, res) => res.send("get hotplace by id"));

module.exports = router;

/**

### RESTful API
---

#### Mobile app
---
##### POST /login
###### login
##### POST /register
###### register
##### GET /location
###### get user location from gps
##### GET /user
###### get user detail
##### PUT /user
###### edit user detail
##### POST /checkin
###### scan barcode to check in
##### PUT /checkout
###### scan barcode to check out
##### POST /hotplace
###### create hotplace and generate barcode
##### GET /hotplace
###### get user hotplaces
##### GET /hotplace/:id
###### get qr of the hotplace
##### PUT /hotplace/:id
###### edit hotplace data
##### DELETE /hotplace/:id
###### delete hotplace detail
##### GET /download
###### download the qr
##### GET /map
###### fething map

#### Web app
---
##### POST /loginadmin
###### logi as admin
##### GET /users
###### get all user data
##### GET /users/:id
###### get user by id
##### GET /reghotplace
###### get all hotplace data
##### GET /reghotplace/:id
###### get hotplace by id
##### PUT users/:id
###### edit hotplace by id
*/
