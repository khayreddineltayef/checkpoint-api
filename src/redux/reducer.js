import { FETECH_DATA } from "./actionsTypes";

const init = {
  data: null,
  loading: true,
};
const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case FETECH_DATA:
      return { ...state, data: payload, loading: false };

    default:
      return state;
  }
};
export default reducer;
