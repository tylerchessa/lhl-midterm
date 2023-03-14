/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const { getUserData } = require("../db/queries/user");

router.post("/login/:id", (req, res) => {
  //set plain text cookie
  res.cookie("user_id", req.params.id).send({
    message: "user logged in",
    user: req.params.id,
  });
  // getUser(req.params.id).then();
});

router.get("/myinfo", (req, res) => {
  const userId = req.cookies.user_id;
  getUserData(userId).then((data) => {
    //3
    console.log("data:", data);
    res.send(data); //5sends the data to mapHelpers.js renderMemberArea function .then
  });
});

router.post("/logout", (req, res) => {
  //remove plain text cookie
  res.clearCookie("user_id").send({
    message: "user logged out",
  });
});
//to target the cookie, the cookie is equal to req.cookies.user_id

module.exports = router;
