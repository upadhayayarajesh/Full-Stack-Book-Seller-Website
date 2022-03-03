const express = require("express");
const router = express.Router();

const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");
const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listRelated,
  listCategories,
  listBySearch,
  photo
} = require("../controllers/product");
const { userById } = require("../controllers/user");

// (req,res) =>{
//     res.send("message success")})

router.post("/product/create/:userId", requireSignin, isAdmin, isAuth, create);
router.put(
  "/product/:productId/:userId",
  requireSignin,
  isAdmin,
  isAuth,
  update
);
router.get("/product/:productId", read);
router.delete(
  "/product/:productId/:userId",
  requireSignin,
  isAdmin,
  isAuth,
  remove
);

router.get("/products", list);
router.get('/products/related/:productId', listRelated)
router.get('/products/categories',listCategories)
router.post("/products/by/search", listBySearch);
router.get('/product/photo/:productId',photo);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
