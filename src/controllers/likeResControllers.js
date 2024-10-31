import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js"

const model = initModels(sequelize);


const likeResByResId = async (req, res) => {
    try {
        let { res_id } = req.params;
        let likeResByResId = await model.like_res.findAll({
            where: {
                res_id
            },
            attributes : ["like_res_id", "res_id", "date_like"]
        })
        return res.status(200).json(likeResByResId);
    } catch (error) {
        return res.status(500).json({ message: "Error for likeRes" });
    }
}

const likeResByUserId = async (req, res) => {
    try {
        let { user_id } = req.params;
        let likeResByUserId = await model.like_res.findAll({
            where: {
                user_id
            },
            attributes : ["like_res_id", "user_id", "date_like"]
        })
        return res.status(200).json(likeResByUserId);
    } catch (error) {
        return res.status(500).json({ message: "Error for likeRes" });
    }
}

const likeRes = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        await model.like_res.create({
            user_id,
            res_id

        });
        return res.status(201).json({message: "Like sucessfully"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error for likeRes" });
    }
}

const dislikeRes = async (req, res) => {
    try {
        let { user_id, res_id } = req.params
        await model.like_res.destroy({
            where:{
                user_id,
                res_id
            }
            
        })
        return res.status(200).json({message: "Dislike successfully"});
    } catch (error) {
        return res.status(500).json({ message: "Error for likeRes" });
    }
}
export {
    likeResByResId, likeResByUserId, likeRes, dislikeRes
}