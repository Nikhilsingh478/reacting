import React, { useState } from "react";

const App = () => {
  const [val, changeVal] = useState([
    { name: "nikhil", age: 27 },
    { name: "vedant", age: 33 },
    { name: "harsh", age: 34 },
  ]);
  return (
    <>
      <div className="p-12">
        {val.map((value, index) => (
          <>
            <h1 className="font-semibold">{value.name}</h1>
            <h1>{value.age}</h1>
            
          </>
        ))}
        <button
              onClick={() =>
                changeVal(() =>
                  val.map((item) =>
                    item.name === "nikhil" ? { name: "nikhil", age: 29 } : item
                  )
                )
              }
              className="px-5 py-2 bg-blue-400 rounded-full"
            >
              click
            </button>
      </div>
    </>
  );
};

export default App;
