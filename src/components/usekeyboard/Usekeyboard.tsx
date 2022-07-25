import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import Checkbox from "@mui/material/Checkbox";

export default function Usekeyboard() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="absolute bottom-48 right-48">
      <Checkbox
        {...label}
        checkedIcon={<CircleIcon className="opacity-50" />}
        icon={<CheckCircleIcon />}
        defaultChecked
        sx={{
          color: "#f3a952",
          opacity: "10",
          "& .MuiSvgIcon-root": { fontSize: 28, color: "#f3a952" },
        }}
      />
    </div>
  );
}
