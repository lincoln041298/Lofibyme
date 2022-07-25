import LogoLofi from "@/assets/logolofi.gif";
import ButtonSwitch from "../switchNightDay/ButtonSwitch";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="Header flex justify-between items-center">
      <p className="w-52">
        <img src={LogoLofi} alt="logo lofi" />
      </p>
      <div className="z-10">
        <ButtonSwitch />
      </div>
    </div>
  );
}
