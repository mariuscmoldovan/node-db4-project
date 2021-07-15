

const router = require('express').Router()



router.use('*', (req, res, next) => {
    next({status:404, message: 'not found'})
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: 'somentig wrong in recipe router',
        message: err.message, 
        stack:err.stack
    })
})





module.exports = router