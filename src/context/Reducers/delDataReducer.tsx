export const Reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                data: action.payload
            };
        case 'SET_USER':
            return {
                ...state,
                loggedIn: action.payload
            };
        default:
            return state;
    }
}