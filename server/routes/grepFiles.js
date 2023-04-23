const express = require('express');
const router = express.Router();

//--------------------CONTROLLERS--------------------*/
const { matchEmails, GrepClass } = require('../controllers/grep.js');
const Sort = require('../controllers/sort.js');

//--------------------MIDDLEWARE--------------------*/
router.use((req, res, next) => {
  console.log('/grepFiles', '@', new Date);
  next();
})

//--------------------ROUTES--------------------*/
router
  .route('/')
  .get( async (req, res) => {
    try {
      await res.sendStatus(200)
    } catch(err) {
      throw err;
    }
  })
  .post((req, res) => {

    console.log('req.body.options:', req.body.options);
    const [file, grepKey, hasNumberLines, sort, text] = [
      req.body.data, Object.keys(req.body.options.param)[0],
      req.body.options.param['line numbers'],
      req.body.options.sort.alphabet,
      req.body.options.text || null
    ];
    // const paramKeys = req.body.options.param;
    // for (let key in paramKeys) {
    //   if (paramKeys[key]) {
    //     grepKey = key;
    //   }
    // };
    // const result = GrepClass[grepKey](file, hasNumberLines);
    const log = console.log.bind(console);
    console.group('/---------------------------/')
      log('grepKey:', grepKey)
      log('hasNumberLines:', hasNumberLines);
      log('sort:', sort)
      log('text:', text)
    console.groupEnd('/---------------------------/');

    //  console.log('sort:', sort);
     if (sort) {
      // console.log('GrepClass[grepKey](file, Object.keys(req.body.options.param)[0]):', GrepClass[grepKey](file, Object.keys(req.body.options.param)[0]));
      console.log('DONE!!!')
      const sortFile = new Sort;
      res.send(sortFile.sortEmails(GrepClass[grepKey](file, hasNumberLines, text)));
     } else {
      const result = GrepClass[grepKey](file, hasNumberLines, text);
       res.send(result);
     }
  })



module.exports = router;