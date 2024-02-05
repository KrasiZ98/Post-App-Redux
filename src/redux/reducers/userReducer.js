import { ADD_POST, CREATE_USERS, CREDENTIAL_USER_ERROR, CREDENTIAL_USER_SUCCESS, DELETE_USER, LOGIN_USER, LOGOUT_USER, UPDATE_USER } from "../actions/actionsTypes";

const initalValue = {
    users: JSON.parse(localStorage.getItem("users")) || [],
    user: JSON.parse(localStorage.getItem("user")) || {},
    error: null,
    successMesg: null,
}

const userReducer = (state = initalValue, action) => {
    switch (action.type) {
        case CREATE_USERS:
            const registeredUsers = [...state.users, action.payload];
            localStorage.setItem("users", JSON.stringify(registeredUsers));
            localStorage.setItem("user", JSON.stringify(action.payload));
            return {
                ...state,
                users: registeredUsers,
                error: null, user: action.payload,
                user: action.payload,
            };
        case LOGIN_USER:
            localStorage.setItem("user", JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload, error: null
            };
        case LOGOUT_USER:
            localStorage.removeItem("user")
            return {
                ...state,
                user: {}, successMesg: null, error: null,
            }
        case UPDATE_USER:
            const userId = action.payload.userId;
            const updateUser = action.payload.user;

            const udatedStateUpdate = state.users.map((user) =>
                user.id === userId ? updateUser : user);
            localStorage.setItem("users", JSON.stringify(udatedStateUpdate));
            localStorage.setItem("user", JSON.stringify(updateUser));
            return {
                ...state,
                users: udatedStateUpdate,
                user: updateUser, successMesg: null, error: null,
            }
        case DELETE_USER:
            const updatedStateDelete = state.users.filter((user) =>
                user.id !== action.payload.userId);
            localStorage.removeItem("user");
            localStorage.setItem("users", JSON.stringify(updatedStateDelete));
            return {
                ...state,
                users: updatedStateDelete,
                user: {}, successMesg: null, error: null,
            }
        case CREDENTIAL_USER_ERROR:
            return {
                ...state,
                error: action.payload, successMesg: null,
            };
        case CREDENTIAL_USER_SUCCESS:
            return {
                ...state,
                error: null, successMesg: action.payload,
            };
        case ADD_POST:
            const senderUser = action.payload.senderUser;
            const recipientUserId = action.payload.recipientUserId;
            const postMessage = action.payload.post;
            const updatedStateAddPost = state.users.map((user) =>
                user.id === recipientUserId ? { ...user, posts: [...user.posts, { senderUser, postMessage }] } : user);
            localStorage.setItem("users", JSON.stringify(updatedStateAddPost));
            return {
                ...state,
                users: updatedStateAddPost,
                error: null, successMesg: null,
            }
        default:
            return state
    };
};

export default userReducer;

