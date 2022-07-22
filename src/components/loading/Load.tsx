import Logo from "@/assets/logolofi.gif";

export interface LoadProps {}

export function Load(props: LoadProps) {
  return <img src={Logo} alt="loading" />;
}
