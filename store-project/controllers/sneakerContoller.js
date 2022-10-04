// loading console model
const snkrs = require('../models/sneakers')

// index
const findAllSneakers = (req, res) => {
    snkrs.find({}, (err, foundSneaker) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('sneakers/Index', {snkrs: foundSneaker})
        }
    })
}

// new
const newSneaker = (req, res) => {
   
    res.render('sneakers/New')
}

// delete
const deleteSneaker = (req, res) => {

    snkrs.findByIdAndDelete(req.params.id, (err, deleteSneaker) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/sneakers')
        }
    })
}

// update
const updateSneaker = (req, res) => {
    if (req.body.isUsed === 'on') {
        req.body.isUsed = true
    } else {
        req.body.isUsed = false
    }

    snkrs.findByIdAndUpdate(req.params.id, req.body, (err, foundSneaker) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/sneakers/${req.params.id}`)
        }
    })
}

// create
const createSneaker = (req, res) => {
    if (req.body.isUsed === 'on') {
        req.body.isUsed = true
    } else {
        req.body.isUsed = false
    }
    
    snkrs.create(req.body, (err, createdSneaker) => {
        if (err) {
            res.status(400).json(err)
        } else [
            res.status(200).redirect('/sneakers/')
        ]
    })
}

// edit
const editSneaker = (req, res) => {
    snkrs.findById(req.params.id, (err, foundSneaker) => {
        if (err) {
            res.status(400).json(err)
        } else {
            
            res.status(200).render('sneakers/Edit', { snkrs: foundSneaker})
        }
    })
}

// show
const showUniqueSneaker = (req, res) => {

    snkrs.findById(req.params.id, (err, foundSneaker) => {
        if (err) {
            
            res.status(400).json(err)
        } else {
            
            res.status(200).render('sneakers/Show', { snkrs: foundSneaker })
        }
    })
}

module.exports = {
    findAllSneakers,
    newSneaker,
    deleteSneaker,
    updateSneaker,
    createSneaker,
    editSneaker,
    showUniqueSneaker,
}