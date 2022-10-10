const express = require("express");
const { route } = require("express/lib/application");
const req = require("express/lib/request");
const Posts = require("../models/posts");

const router = express.Router();

//save post
router.post("/post/save", (req, res) => {
  let newPost = new Posts(req.body);

  newPost.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Post Saved Successfully",
    });
  });
});

//get post

router.get("/posts", (req, res) => {
  Posts.find().exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPost: posts,
    });
  });
});



//update

router.put("/post/update/:id", (req, res) => {
  Posts.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "update Successfully",
      });
    }
  );
});

//delete

router.delete("/post/delete/:id", (req, res) => {
  Posts.findByIdAndDelete(req.params.id).exec((err, deletePost) => {
    if (err) {
      return res.status(400).json({
        message: "delete unsuccesful",
        err,
      });
    }
    return res.status(200).json({ success: "successfully deleted",deletePost });
  });
});

module.exports = router;
