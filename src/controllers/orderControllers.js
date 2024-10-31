import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js"

const model = initModels(sequelize);


const orderByUser = async (req,res) => {
    try {
        let {user_id} = req.body
        await model.orders.create({
            user_id
        })
        return res.status(201).json({message: "Ordered successfull"})
    }catch(error) {
        return res.status(500).json({message: "Error for order by user"})
    }
}

export {
    orderByUser
}