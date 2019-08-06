import Apis from "../api";

export const courseActions = () => async dispatch => {
    const response = await Apis.get("cources");
    dispatch({ type: "COURSE", paylode: response.data });
};