import jwt from "jsonwebtoken";
import BlocklistToken from "../models/blocklisttoken.model.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message : "Please login first",
            error : null
        })
    }

    const isBlockedToken = await BlocklistToken.findOne({
        token : token
    });

    if(isBlockedToken){
        return res.status(401).json({
            message : "Please login to access this route",
            error : null
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = decoded;

        next();
    }
    catch (error) {
        return res.status(500).json({
            message : "Internal Server Error",
            error : error
        })
    }
}