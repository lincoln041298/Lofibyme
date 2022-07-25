import { SET_MODE } from "../constants/ActionType";

interface IAction {
  type: string;
  mode: string;
}

const initialState = {
  mode: "day",
};

const ModReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_MODE: {
      return {
        ...state,
        mode: action.mode,
      };
    }
    default: {
      return state;
    }
  }
};

export default ModReducer;
