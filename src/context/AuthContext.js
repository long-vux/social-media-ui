import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: null,
    // {
    //     "_id": "667b73d6871931fb2429cdcb",
    //     "username": "longvu",
    //     "email": "longvu@gmail.com",
    //     "profilePicture": "",
    //     "coverPicture": "",
    //     "followers": [],
    //     "followings": [
    //         "667b743c3069187bbc509b43"
    //     ],
    //     "isAdmin": false,
    //     "createdAt": "2024-06-26T01:50:14.588Z",
    //     "__v": 0,
    //     "city": "Ho Chi Minh",
    //     "from": "Dak Nong",
    //     "relationship": 1
    // },
    isFetching: false,
    error: false,
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}