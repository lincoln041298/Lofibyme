import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { changeNightDay } from "@/redux/action";

const YellowSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#f3a952",

    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#f3a952",
  },
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function ButtonSwitch() {
  const modeState = useSelector((state: any) => state.modeState);
  const rainState = useSelector((state: any) => state.rainState);
  const { mode } = modeState;
  const { rainMode } = rainState;
  const combieMode = `${mode}-${rainMode}`;
  const dispatch: any = useDispatch();
  const handleChangeDayNight = () => {
    dispatch(changeNightDay(mode));
  };

  return (
    <div>
      <YellowSwitch onClick={handleChangeDayNight} {...label} defaultChecked />
    </div>
  );
}
