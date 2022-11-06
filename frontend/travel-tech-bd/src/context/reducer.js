export const initialState = {
    data: "",
};
const reducer = (initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return{
               ...initialState,
               user: action.payload
            }
        default:
            return initialState;
        }
}

export default reducer;