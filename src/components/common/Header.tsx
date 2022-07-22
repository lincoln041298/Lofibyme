import LogoLofi from "@/assets/logolofi.gif"

export interface HeaderProps{

}

export function Header(props: HeaderProps) {
    return (
        <div className="Header">
            <img src={LogoLofi} alt="logo lofi" />
            <p>Inhere have somethiung</p>
        </div>
    )

}