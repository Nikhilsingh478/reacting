import React from "react";

const Card = () => {
  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9ufGVufDB8fDB8fHww",
      Name: "amazon",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero",
      inStock: true,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1669069604795-80429d880371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmxpcGthcnR8ZW58MHx8MHx8fDA%3D",
      Name: "flipkart",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero",
      inStock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Name: "apple",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero",
      inStock: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/06/8f/6a/068f6a2e1c3fc4782467b701dc89ef9f.jpg",
      Name: "palmonas",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero",
      inStock: true,
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center gap-10">
      {data.map((value, index) => (
        <div
          key={index}
          className="w-72 bg-slate-300 rounded-md overflow-hidden"
        >
          <div className="w-full h-44 bg-zinc-300 rounded-md">
            <img
              src={value.image}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="text-lg font-semibold">{value.Name}</h2>
            <p className="text-sm mt-4">{value.description}</p>
            <button className={`px-4 py-2 text-sm ${value.inStock === true ? "bg-blue-600" : "bg-red-600"} text-white  rounded mt-2 `}>
                {value.inStock ===true ? "In Stock" : "out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
