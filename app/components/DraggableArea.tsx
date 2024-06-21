"use client";
import React, { useRef } from "react";
import DraggableItem from "./DraggableItem";

interface DraggableAreaProps {
  slots: React.ReactNode[];
}

const DraggableArea: React.FC<DraggableAreaProps> = ({ slots }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div
        ref={containerRef}
        className="box-container relative border border-black h-screen w-screen overflow-hidden bg-red-200"
      >
        {slots.map((slot, index) => (
          <DraggableItem slot={slot} key={index} containerRef={containerRef} />
        ))}
      </div>
    </div>
  );
};

export default DraggableArea;
