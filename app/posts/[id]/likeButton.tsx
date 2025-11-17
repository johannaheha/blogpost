"use client";

import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  function handleLikeClick() {
    setCount(count + 1);
  }

  return <button onClick={handleLikeClick}>Like {count}</button>;
}
