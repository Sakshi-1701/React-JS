//TASK 3: Create a Button and make changes in it with the help of Hooks

import { useState } from "react";

import React from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me: {count}</button>
    </div>
  );
}
