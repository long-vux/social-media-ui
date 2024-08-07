import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("http://localhost:8800/api/auth/login", userCredential);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
}

export const registerCall = async (userCredential, dispatch) => {
    dispatch({ type: "REGISTER_START" });
    try {
        const res = await axios.post("http://localhost:8800/api/auth/register", userCredential);
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
    } catch (error) {
        dispatch({ type: "REGISTER_FAILURE", payload: error });
    }
}