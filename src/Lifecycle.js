import React, { useEffect, useState } from "react";

export const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("Mount!");
  }, []);

  useEffect(() => {
    console.log("Updeta!");
  });
  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};
export default Lifecycle;
