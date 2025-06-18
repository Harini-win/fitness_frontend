import React, { useState } from "react";

const option = [
  "Aramandi Hold",
  "Leg stretch",
  "Mulumandi jumps"
];
const CustomDropdown = ({ options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Choose an exercise");

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-56">
      <button
        type="button"
        className="w-full bg-white text-purple-700 font-semibold px-4 py-2 rounded-t-lg shadow focus:outline-none flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        {selected}
        <span className="ml-2">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="absolute w-full bg-white rounded-b-lg shadow z-10">
          {options.map((option) => (
            <div
              key={option}
              className={`px-4 py-2 cursor-pointer hover:bg-purple-100 ${
                selected === option ? "text-purple-600 bg-purple-50" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const Dance = () => {
    return (
        <div
            className="min-h-screen min-w-full flex items-center justify-center relative flex flex-col"
            style={{
                backgroundImage: "url('/bg_d.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
          <div className = "h-18 w-50 absolute rounded-xl left-25 top-10 bg-lime-300">
                <svg xmlns="http://www.w3.org/2000/svg" className = "absolute left-5 top-1 h-15 w-15" viewBox="0 0 512 512"><path fill="#ffffff" d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z"/></svg>
                </div>
            <div className = "h-18 w-50 absolute rounded-xl right-25 top-10 bg-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className = "absolute left-5 top-1 h-15 w-15" viewBox="0 0 512 512"><path fill="#ffffff" d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2l144 0c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48l-97.5 0c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7l0 38.3 0 48 0 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128L0 352c0 17.7 14.3 32 32 32z"/></svg>
                </div>
            <div className="justify-center mb-8 relative z-20">
                <CustomDropdown options={option}/>
            
            </div>
            <div className="relative z-10 bg-transparent rounded-2xl shadow-lg p-6 w-full max-w-6xl h-[600px] border-2 border-white/20 backdrop-blur-[20px] shadow-black/20 text-white">
            </div>
        </div>
    );
}

export default Dance;