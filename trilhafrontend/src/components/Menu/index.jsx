function Menu() {
  return (
    <ul className="text-white flex items-center justify-center gap-7 font-bold font-condensed">
      <li>
        <a className="hover:text-red" href="#home">Home</a>
      </li>
      <li>
        <a className="hover:text-red" href="#about">Sobre mim</a>
      </li>
      <li>
        <a className="hover:text-red" href="#curiosities">Curiosidades</a>
      </li>
      <li>
        <a className="hover:text-red" href="#motivation">Motivações</a>
      </li>
    </ul>
  );
}

export default Menu;
