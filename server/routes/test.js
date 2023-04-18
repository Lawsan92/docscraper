const express = require('express');
const router = express.Router();

//--------------------CONTROLLERS--------------------*/


//--------------------MIDDLEWARE--------------------*/
router.use((req, res, next) => {
  console.log('/test', '@', new Date);
  next();
})

//--------------------ROUTES--------------------*/
router
  .route('/')
  .get(async (req, res, next) => {
    try {
      await res.sendStatus(200);
    } catch (err) {
      await next(err);
    }
  });



module.exports = router;