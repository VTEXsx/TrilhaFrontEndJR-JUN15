import Logo from "../../assets/logo.webp";
import Menu from "../Menu";
import MenuMobile from "../MenuMobile";
function Header() {
  const larguraTela = window.innerWidth;
  return (
    <header className="fixed top-0 w-full h-16 bg-black border-b-2 border-red z-50">
      <div className="w-[90%] xl:w-[70%] mx-auto flex justify-between items-center h-16">
        <img
          className="bg-black h-[130%] px-5 md:px-8 border-b-2 border-red self-start "
          src={Logo}
          alt=""
        />
        {larguraTela < 768 ? <MenuMobile /> : <Menu />}
      </div>
    </header>
  );
}

export default Header;
