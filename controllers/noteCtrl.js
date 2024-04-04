const Notes = require('../models/node_Model')

const noteCtrl ={
    getNotes : async (req,res) => {
        try {
            res.json(req.user.id)
            const notes = await Notes.find({user_id: req.user_id})
        } catch (err) {
            return res.status(500).json({msg : err.message})
        }
    }
}


module.exports = noteCtrl