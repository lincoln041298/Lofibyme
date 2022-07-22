import LogoLofi from "@/assets/logolofi.gif";
import { SwitchNightDay } from "../switchNightDay";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="Header">
      <p className="w-52">
        <img src={LogoLofi} alt="logo lofi" />
      </p>

      <div>
        <SwitchNightDay />
      </div>
    </div>
  );
}
