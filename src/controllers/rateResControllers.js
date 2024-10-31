import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js"

const model = initModels(sequelize);

const addRateRes = async (req, res) => {
    try {
        let {user_id, res_id, amount} = req.body;
        await model.rate_res.create({
            user_id,
            res_id,
            amount
        })
        return res.status(200).json({message: "Add rate res successfully"})
    }catch(error) {
        return res.status(500).json({message: "Error for adding rate res "})
    }
}
const rateResByUser = async (req,res) => {
    
        try {
            let { user_id } = req.params;
            let rateResByUser = await model.rate_res.findAll({
                where: {
                    user_id
                },
                attributes : ["rate_res_id", "user_id", "amount", "date_rate"]
            })
            return res.status(200).json(rateResByUser);
        } catch (error) {
            return res.status(500).json({ message: "Error for rateResByUser" });
        }
    
}

const rateResByRes = async (req,res) => {
    try {
        let { res_id } = req.params;
        let rateResByRes = await model.rate_res.findAll({
            where: {
                res_id
            },
            attributes : ["rate_res_id", "res_id", "amount", "date_rate"]
        })
        return res.status(200).json(rateResByRes);
    } catch (error) {
        return res.status(500).json({ message: "Error for rateResByRes" });
    }
}

export {
    addRateRes,
    rateResByUser,
    rateResByRes
}