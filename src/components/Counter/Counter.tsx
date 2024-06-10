import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prevValue) => prevValue + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <p>Count {count}</p>
    </div>
  );
};
