const express = require('express');
const router = express.Router();

//--------------------CONTROLLERS--------------------*/
const { getS3List, getS3Object } = require('../controllers/AWS.js');

//--------------------MIDDLEWARE--------------------*/
router.use((req, res, next) => {
  console.log('/getFiles', '@', new Date);
  next();
})

//--------------------ROUTES--------------------*/
router
  .route('/')
  .get((req, res) => {
    // getS3List()
    //   .then((data) => {
    //     console.log('data:', data);
    //   });
    getS3Object()
      .then((data) => {
        res.send(data);
      })
  });


module.exports = router;