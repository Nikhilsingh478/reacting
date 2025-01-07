import React from "react";

const Card2 = () => {
  const data = [
    {
      name: "darkhaast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolorem eos.",
    },
    {
      name: "mile sur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolorem eos.",
    },
    {
      name: "Believer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolorem eos.",
    },
    {
      name: "maiya mainu",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolorem eos.",
    },
  ];

  const buttonWasClicked = ()=>{
    alert("clicked");
  }

  return (
    <div className="w-full h-screen bg-slate-400 flex flex-col gap-2 justify-center items-center">
      {data.map((value, index) => (
        <div key={index} className="h-32 w-90 px-4 py-1 my-2 bg-blue-300 rounded-md">
          <h2 className="my-2 font-semibold text-xl">{value.name}</h2>
          <p className="text-sm">
            {value.description}
          </p>
          <button onClick={buttonWasClicked} className="mt-3 px-5 py-1  text-white bg-black rounded-lg">
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card2;
