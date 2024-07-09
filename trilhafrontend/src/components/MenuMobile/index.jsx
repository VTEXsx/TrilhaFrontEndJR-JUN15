import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function MenuMobile() {
 const [open, setOpen] = useState(false);

 function openMenu(){
  setOpen(true);
 }
 function closeMenu(){
  setOpen(false);
 }
  return (
    <>
      <FaBars
        onClick={openMenu}
        className="text-white text-3xl hover:text-red"
      />
      {open && (
        <div className="fixed top-0 right-0 w-1/2 h-60 border-b-2 border-red bg-black">
          <IoClose
            onClick={closeMenu}
            className="text-white text-5xl fixed right-3 top-2 hover:text-red"
          />
          <ul className="h-4/5 mt-[20%] text-white flex flex-col items-center justify-around font-bold font-condensed">
            <li>
              <a className="hover:text-red" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-red" href="#about">
                Sobre mim
              </a>
            </li>
            <li>
              <a className="hover:text-red" href="#curiosities">
                Curiosidades
              </a>
            </li>
            <li>
              <a className="hover:text-red" href="#motivation">
                Motivações
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MenuMobile;
