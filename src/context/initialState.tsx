export const initialState = {
    userDetail: "",
    loggedIn: localStorage.getItem('logged') ? localStorage.getItem('logged') : false,
    data: []
};