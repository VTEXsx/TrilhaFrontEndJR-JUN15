import curiosities from "../../assets/images/curiosities.jpg";
function Curiosities() {
  return (
    <section id="curiosities" className="py-10 bg-black font-bold">
      <div className="w-[90%] xl:w-[70%] mx-auto flex flex-col gap-4">
        <h2 className="gradient-text text-3xl md:text-4xl  text-center md:text-end font-condensed">
          Curiosidades
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 md:gap-0">
          <img
            src={curiosities}
            alt="foto de Vitor Silva com seu instrumento musical mostrando que é músico também"
            className="w-1/2 md:w-1/3 rounded-xl shadow-xl shadow-neutral-800 mb-3 hover:scale-110 hover:-rotate-6"
          />
          <div className="flex flex-col gap-4 md:gap-7 items-center text-center md:text-end text-base md:text-lg tracking-widest text-white md:w-1/2 lg:w-1/3 font-condensedItalic">
            <p>Uma das linguagens é a programação, mas e a outra ?</p>
            <p>
              Sou músico a quase 11 anos, desde la esse sempre foi meu hobby, a
              música me preparou em muitos sentidos para vida, como: trabalho em
              equipe, companheirismo, disciplina, vontade de evoluir e dentre
              outras coisas que eu demoraria uma eternidade para descrever aqui.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Curiosities;
