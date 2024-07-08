import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import ArrowThisIsIt from "../../assets/arrowThisISIt.png";
import LightBulb from "../../assets/lightBulb.png";
import BoxLinks from "../BoxLinks";
function Home() {
  return (
    <section
      id="home"
      className="relative mt-16 w-full pt-20 pb-40 md:py-20 bg-black text-white font-bold"
    >
      <img
        src={ArrowThisIsIt}
        alt=""
        className="absolute top-0 md:-top-10 right-0 md:right-10 lg:right-28 md:rotate-12 lg:rotate-12 hover:scale-105 md:w-60 xl:right-52 xl:rotate-45 xl:top-1 xl:w-80"
      />
      <div className="w-[90%] xl:w-[70%] h-full mx-auto">
        <div className="h-3/4 flex flex-col gap-1 md:gap-2 items-center justify-center md:items-start md:text-start md:w-4/5 text-center">
          <h2 className="text-2xl">Vítor Silva</h2>
          <h1 className="text-4xl md:text-5xl gradient-text ">
            Desenvolvedor Front End
          </h1>
          <p className="text-lg tracking-widest md:w-4/5 lg:w-3/5">
            especialidade em React, Redux, Vite, NextJS, JavaScript, Tailwind
            CSS e brinco no Backend com NodeJS
          </p>
          <div className="flex items-center justify-center md:justify-start gap-5 w-full mt-2 md:mt-5">
            <BoxLinks href={"https://www.linkedin.com/in/devsvitor/"}>
              <FaLinkedinIn className="hover:scale-110" />
            </BoxLinks>
            <BoxLinks href={"https://github.com/VTEXsx"}>
              <TbBrandGithubFilled className="hover:scale-110" />
            </BoxLinks>
            <BoxLinks href={"https://www.instagram.com/svitor.dev/"}>
              <AiFillInstagram className="hover:scale-110" />
            </BoxLinks>
          </div>
        </div>
      </div>

      <img
        src={LightBulb}
        alt=""
        className="absolute -scale-x-100 bottom-3 left-2 md:left-[60%] md:w-60  hover:scale-105 xl:left-[50%]"
      />
    </section>
  );
}

export default Home;
