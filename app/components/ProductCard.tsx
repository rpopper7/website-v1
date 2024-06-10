import React, { useRef } from "react";
import DraggableItem from "./DraggableItem";

const ProductCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return <DraggableItem slot={1} containRef={containerRef} />;
};

export default ProductCard;
