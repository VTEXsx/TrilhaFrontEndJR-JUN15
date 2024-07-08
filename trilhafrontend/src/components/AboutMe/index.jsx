import Aboutme from "../../assets/Aboutme.png";
function AboutMe() {
  return (
    <section id="about" className=" py-10 ">
      <div className="w-[90%] xl:w-[70%] mx-auto flex flex-col items-center md:items-start gap-4">
        <h2 className="text-red text-3xl md:text-4xl font-bold">Sobre mim</h2>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
          <img
            src={Aboutme}
            alt=""
            className="w-1/2 md:w-1/3 rounded-xl shadow-xl shadow-gray-500 mb-3 hover:scale-110 hover:rotate-6"
          />
          <div className="flex flex-col gap-4 items-center text-center md:text-start text-base md:text-lg font-bold  tracking-widest">
            <p>
              Sonho em me tornar um{" "}
              <strong className="text-red">Desenvolvedor Front-end</strong>, foi
              amor a primeira vista, hoje estudo sobre o react e toda sua vasta
              possibilidade de transformar ideias em experiências incríveis.
            </p>
            <p>
              Me chamo João Vítor da Silva Sousa, tenho 23 anos e sou de
              Surubim/PE.
            </p>
            <p>
              E digamos que hoje eu saiba ler duas linguagens que muita gente
              nem conhece e vou lhe explicar o por que!
            </p>
            <p className="text-red">”Scrollar” ai pra entender!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
