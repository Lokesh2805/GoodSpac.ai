import React, { createContext, useRef } from "react";
import { useContext, useEffect, useState } from "react";
import { Minus, Plus } from "react-feather";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);
  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;
  const ref = useRef(null);

  return (
    <li
      onMouseEnter={() => setSelected(open ? null : value)}
      onMouseLeave={() => setSelected(false)}
      className="mb-4 bg-[#f0f1f2] transition duration-300 ease-in-out rounded-xl "
      {...props}
    >
      <header
        role="button"
        className="flex justify-between items-center p-5 font-light text-lg text-[#071725]"
      >
        {trigger}
        {!open && <Plus size={24} className={` transition-transform `} />}
        {open && <Minus size={24} className={` transition-transform `} />}
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div
          className="pt-2 p-4 text-[#a2a2a2] text-sm cursor-pointer leading-normal font-normal text-left "
          ref={ref}
        >
          {children}
        </div>
      </div>
    </li>
  );
}
