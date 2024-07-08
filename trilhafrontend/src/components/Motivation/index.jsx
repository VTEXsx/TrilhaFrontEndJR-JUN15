import motivacao from "../../assets/motivacao.png";
function Motivation() {
  return (
    <section id="motivation" className="flex flex-col items-center py-10 gap-4">
      <div className="w-[90%] xl:w-[70%] mx-auto flex flex-col items-center md:items-start gap-4">
        <h2 className="text-red text-3xl md:text-4xl font-bold">Motivação</h2>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
          <img
            src={motivacao}
            alt=""
            className="w-2/3 rounded-xl shadow-xl shadow-gray-500 mb-3 hover:scale-110 hover:rotate-6"
          />
          <div className="flex flex-col gap-4 items-center text-center md:text-start text-base md:text-lg font-bold  tracking-widest lg:w-3/5">
            <p>
              A vontade de evoluir, trocar e ganhar experiências com outras
              pessoas é o que faz querer entrar na Codigo Certo, meu objetivo é
              ajudar outras pessoas ao mesmo tempo que melhoro minhas Soft
              Skills e minhas Hard Skills para me preparar ainda mais pro
              mercado de trabalho.{" "}
            </p>
            <p>
              Iniciativas como está é incrivel, ajudar pessoas a se preparar pro
              mercado de trabalho ao mesmo tempo que ajuda outras pessoas com o
              trabalho voluntário, desde já agradeço por fazer parte da
              comunidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Motivation;
