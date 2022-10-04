// replace callback functions with controller callback functions

// load express
const express = require('express')



// Loading our Model of fruit
const sneakers = require('../models/sneakers')

// Router object for our routes
const router = express.Router()



// bringing in the callback functions to be used inside routes
const { 
    findAllSneakers, 
    newSneaker,
    deleteSneaker,
    updateSneaker,
    createSneaker,
    editSneaker,
    showUniqueSneaker, } = require('../controllers/sneakerContoller')

// index route
router.get('/', findAllSneakers)

// new route
router.get('/new', newSneaker)

// delete route
router.delete('/:id', deleteSneaker)

// update route
router.put('/:id', updateSneaker)

// create route
router.post('/', createSneaker)

// edit route
router.get('/:id/edit', editSneaker)

// shoow route
router.get('/:id', showUniqueSneaker)


module.exports = router