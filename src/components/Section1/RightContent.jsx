import React, { useRef, useState } from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  const containerRef = useRef(null);

  const onPrev = () => {
    containerRef.current.scrollBy({
      left: -500, // scroll left
      behavior: "smooth",
    });
  };

  const onNext = () => {
    containerRef.current.scrollBy({
      left: 500, // scroll right
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="text-5xl cursor-pointer flex flex-col justify-center"
        onClick={onPrev}
      >
        {"<"}
      </div>
      <div
        id="right"
        className="overflow-x-auto h-full w-2/3  p-5 flex flex-nowrap gap-8"
        ref={containerRef}
      >
        {props.users.map(function (elm, idx) {
          return <RightCard key={idx} id={idx} img={elm.img} tag={elm.tag} />;
        })}
      </div>
      <div
        className="text-5xl cursor-pointer flex flex-col justify-center"
        onClick={onNext}
      >
        {">"}
      </div>
    </>
  );
};

export default RightContent;
