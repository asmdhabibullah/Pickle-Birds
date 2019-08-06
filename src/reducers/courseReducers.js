export default (state = [], action) => {
    switch (action.type) {
        case "COURSE":
            return action.paylode;
        default:
            return state;
    }
};