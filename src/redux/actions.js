import axios from "axios";
import { FETECH_DATA } from "./actionsTypes";

export const fetech = (options) => async (dispatch) => {
  try {
    const response = await axios.request(options);
    dispatch({
      type: FETECH_DATA,
      payload: response.data.hints,
    });
  } catch (error) {
    console.log(error);
  }
};
