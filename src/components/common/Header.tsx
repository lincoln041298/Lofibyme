import LogoLofi from "@/assets/logolofi.gif";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="Header">
      <p className="w-52">
        <img src={LogoLofi} alt="logo lofi" />
      </p>

      <div>
        <label className="skeuo__switch">
          <input type="checkbox" className="skeuo__input" />
          <div className="skeuo__rail">
            <span className="skeuo__circle"></span>
          </div>
        </label>
      </div>
    </div>
  );
}
