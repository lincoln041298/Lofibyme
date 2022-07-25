import Backgroundday from "@/assets/book_cafe_preview_in.cf06fd4a92871f248f72.png";
import { useSelector } from "react-redux";
import Video from "../../../assets/video/Interior+-+Rainy+Day.mp4";
import Video2 from "@/assets/video/Interior+-+Rainy+Night.mp4";
import "./Intheday.scss";

export function Intheday() {
  const modeState = useSelector((state: any) => state.modeState);
  const rainState = useSelector((state: any) => state.rainState);
  const { mode } = modeState;
  const { rainMode } = rainState;
  const combieMode = `${mode}-${rainMode}`;
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        className={mode === "day" ? "video-in" : "video-out"}
      >
        <source src={Video} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={mode === "night" ? "video-in" : "video-out"}
      >
        <source src={Video2} type="video/mp4" />
      </video>
    </div>
  );
}
