import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

export function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  function handleToggle(i) {
    setCurOpen(curOpen === i ? null : i);
  }

  return (
    <div className="w-full max-w-2xl bg-white shadow-md rounded-lg">
      {data.map((item, i) => (
        <AccordionItem
          item={item}
          key={i}
          num={i}
          onToggle={() => handleToggle(i)}
          open={curOpen === i}
        />
      ))}
    </div>
  );
}
