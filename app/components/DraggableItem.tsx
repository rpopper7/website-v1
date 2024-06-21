"use client";
import React, { useEffect, useRef } from "react";

interface DraggableItemProps {
  slot: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
}

const DraggableItem: React.FC<DraggableItemProps> = ({
  slot,
  containerRef,
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>();
  const coordinates = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = containerRef.current;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coordinates.current.startX = e.clientX;
      coordinates.current.startY = e.clientY;
    };

    const onMouseUp = () => {
      isClicked.current = false;
      coordinates.current.lastX = box.offsetLeft;
      coordinates.current.lastY = box.offsetTop;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX =
        e.clientX - coordinates.current.startX + coordinates.current.lastX;
      const nextY =
        e.clientY - coordinates.current.startY + coordinates.current.lastY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };

    box.addEventListener("mousedown", onMouseDown);
    box.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    return () => {
      box.removeEventListener("mousedown", onMouseDown);
      box.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className="box absolute top-0 left-0 bg-red-500 h-auto w-auto cursor-pointer"
    >
      {slot}
    </div>
  );
};

export default DraggableItem;
