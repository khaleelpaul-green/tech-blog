const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const postData = await Comment.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
      
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_content: req.body.comment_content,
      commenter_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;