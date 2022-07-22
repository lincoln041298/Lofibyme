import Switch from "@mui/material/Switch";

export interface SwitchNightDayProps {}
const label = { inputProps: { "aria-label": "Switch demo" } };

export function SwitchNightDay(props: SwitchNightDayProps) {
  return (
    <div>
      <Switch {...label} defaultChecked />
    </div>
  );
}
