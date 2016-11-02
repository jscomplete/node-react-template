import express from 'express';
const router = express.Router();

router.get('/items', (req, res) => {
  res.send({
    items: {
      1: { title: 'Item one' },
      2: { title: 'Item two' },
    }
  });
});

export default router;
