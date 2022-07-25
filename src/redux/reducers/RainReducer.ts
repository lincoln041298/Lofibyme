import { SET_RAIN } from "../constants/ActionType";

const initialState = {
  rainMode: "clear",
  rainValue: 0,
  iconChange: false,
};
const rainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_RAIN:
      return {
        ...state,
        rainMode: action.rainMode,
        rainValue: action.rainValue,
        iconChange: action.iconChange,
      };
    default: {
      return state;
    }
  }
};

export default rainReducer;
