const UserModel = require('../../models/nodeDb/user.model');

const getUser = async (req, res, next) => {
    try {
        const users = await UserModel.findAll()
        if(users.length > 0) {
            res.status(200).json({users})
        } else {
            res.status(200).json({ users: [] })
        }
    } catch(error) {
        console.error('Error retrieving users:', error)
        res.status(500).json({ message: 'Internal Server Error'});
    }
}

module.exports = getUser