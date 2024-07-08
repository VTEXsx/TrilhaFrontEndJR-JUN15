/* eslint-disable react/prop-types */
function BoxLinks(props) {
  return (
    <div className="w-14 h-14 md:w-20 md:h-20 border-2 border-red">
      <a className="w-full h-full flex justify-center items-center text-3xl md:text-5xl" href={props.href} target="_blank">
        {props.children}
      </a>
    </div> 
  );
}

export default BoxLinks;
