import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="shrink-0 h-full overflow-hidden relative rounded-3xl bg-red-500 w-80">
      <img className=" h-full w-full object-cover"
        src={props.img}
        alt=""
      />
      <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  );
};

export default RightCard;
