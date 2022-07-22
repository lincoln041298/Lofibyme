import Backgroundday from "@/assets/book_cafe_preview_in.cf06fd4a92871f248f72.png";
import Video from "../../../assets/video/Interior+-+Rainy+Day.mp4";
export interface InthedayProps {}

export function Intheday(props: InthedayProps) {
  return (
    <div>
      <video className="video absolute top-0 -z-10" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}
