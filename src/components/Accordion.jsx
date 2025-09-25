import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion">
      <button
        className={`accordion-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h2>{title}</h2>
        <span
          className="icon-toggle"
          style={{
            display: "inline-block",
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <HiChevronDown size={20} />
        </span>
      </button>

      <div
        className="accordion-content"
        style={{
          maxHeight: isOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div className="content-inner">{children}</div>
      </div>
    </div>
  );
}
