import { SET_MODE, SET_RAIN } from "../constants/ActionType";

export const setMode = (payload: string) => ({
  type: SET_MODE,
  mode: payload,
});

export const setRain = (payload: string, value: number, bool: boolean) => ({
  type: SET_RAIN,
  rainMode: payload,
  rainValue: value,
  iconChange: bool,
});

export const changeNightDay = (currentStatus: string) => {
  let status: any;
  currentStatus === "day" ? (status = "night") : (status = "day");

  return (dispatch: any) => {
    dispatch(setMode(status));
  };
};

export const changeRainStatus = (
  currentStatus: string,
  value: number,
  bool: boolean
) => {
  console.log(currentStatus);
  let status: any;
  if (currentStatus === "clear") {
    status = "rain";
    bool = true;
  } else if (currentStatus === "rain") {
    status = "clear";
    bool = false;
  }
  console.log(status);
  return (dispatch: any) => {
    dispatch(setRain(status, value, bool));
  };
};

