import React, { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0); // array destructing [a, b] = [1, 2] // var a = 1, b = 2

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
