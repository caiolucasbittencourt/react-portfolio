import { useState } from "react";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button
        className={`accordion-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h2>{title}</h2>
        <span className="icon-toggle">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className="accordion-content"
        style={{ maxHeight: isOpen ? "500px" : "0" }}
      >
        <div className="content-inner">{children}</div>
      </div>
    </div>
  );
}