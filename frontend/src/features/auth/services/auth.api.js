import axios from "axios"

/**
 * @description:  Here write the function to authenticate the user
 */

/**
 * @description: here write axios instance to make the request
 */

const apiInstance = axios.create({
    baseURL: "http://localhost:3000/api/user",
    withCredentials : true 
})

// 1. Register Function
export const registerUser = async ({ name, username, email, password }) => {
    try {
        const response = await apiInstance.post("/register",{
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
        const response = await apiInstance.post("/login",{
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
        const response = await apiInstance.get("/logout");

        return response.data;
    }
    catch (error) {
        throw new Error(error)
    }
}

// 4. getMe Function 
export const getMe = async () => {
    try {
        const response = await apiInstance.get("/me");

        return response.data;
    }
    catch (error) {
        throw new Error(error)
    }
}