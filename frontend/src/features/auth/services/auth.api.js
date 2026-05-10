import axios from "axios"
import apiInstance from "../../../shared/lib/axio";

/**
 * @description:  Here write the function to authenticate the user
 */

// 1. Register Function
export const registerUser = async ({ name, username, email, password }) => {
    try {
        const response = await apiInstance.post("/user/register",{
            name, 
            username,
            email,
            password,
        });

        // console.log(response.data);

        return response.data;
    }
    catch (error) {
        throw new Error(error)
    }
} 

// 2. Login Function

export const loginUser = async ({ email, password }) => {
    try {
        const response = await apiInstance.post("/user/login",{
            email,
            password,
        });

        return response.data;
    }
    catch (error) {
        throw new Error(error)
    }
}

// 3. logout Function
export const logoutUser = async () => {
    try {
        const response = await apiInstance.get("/user/logout");

        return response.data;
    }
    catch (error) {
        throw new Error(error)
    }
}

// 4. getMe Function 
export const getMe = async () => {
    try {
        const response = await apiInstance.get("/user/me");

        return response.data;
    }
    catch (error) {
        throw new Error(error)
    }
}