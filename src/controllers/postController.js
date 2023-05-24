const {post1} = require('../models')

exports.create = async (req, res, next) => {
    try {       
        const {uid, title, body} = req.body        

        const input = await post1.create({
            user_id: uid,
            title: title,
            body: body
        })
              
        res.status(200).send({
            message: 'data created'
        })
    } catch (error) {
        res.status(500).send({
            message: `an error occuired`,
            data: error.message
        })
    }
};

exports.read = async (req,res,next) => {
    const {idUser} = req.params
    try {
        const post = req.post
        
        const getPost = await post1.findByPk(idUser, {
            where: {user_id: idUser}
        })
        res.status(200).send({
            message: 'get post success',
            data: {
                title: getPost.dataValues.title,
                body: getPost.dataValues.body
            }
        })
    } catch (error) {
        res.status(500).send({
            message: `an error occuired`,
            data: error.message
        })
    }
}

exports.update = async (req, res, next) =>{
    const {idUser} = req.params
    try { 
        const {title, body} = req.body

        const getPost = await post1.update({title: title, body: body}, {
            where: {user_id: idUser}
        })  

        res.status(200).send({
            message: 'data was updated',
            data: {
                title: title,
                body: body
            }
        })

    } catch (error) {
        res.status(500).send({
            message: `an error occuired`,
            data: error.message
        })
    }
}

exports.delete = async (req, res, next) =>{
    try {
        // await post1.destroy({
        //     where: {
        //         user_id: 3
        //     }
        // })

        // // DeleteALL
        await post1.destroy({
            truncate: true
        })

        res.status(200).send({
            message: 'all post was deleted from DB'
        })

    } catch (error) {
        res.status(500).send({
            message: `an error occuired`,
            data: error.message
        })
    }
}