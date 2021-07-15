

const router = require('express').Router()

const Recipe = require('./recipes-model')


router.get('/:recipe_id',(req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then(resourse => {
          res.status(200).json(resourse)
        })
        .catch(next)
 })



router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: 'somentig wrong in recipe router',
        message: err.message, 
        stack:err.stack
    })
})





module.exports = router