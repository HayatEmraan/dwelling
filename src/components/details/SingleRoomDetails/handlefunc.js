"use client";

import { useState } from "react";

export const handleFunc = (e) => {
  const [selectionRange, setSelectionRange] = useState(e);
  console.log(selectionRange, "selectionRange");
};
