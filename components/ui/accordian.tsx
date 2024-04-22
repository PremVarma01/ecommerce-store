"use client";

import { cn } from "@/libs/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <div
            className="bg-gray-100 p-2 rounded-t-md cursor-pointer flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <div className="text-md">{item.title}</div>
            <div>
              {activeIndex === index ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </div>
          </div>
          {activeIndex === index && (
            <div className="bg-white p-2 rounded-b-md text-sm text-neutral-600 my-4">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
