import React from "react";

const RightCardContent = (props) => {
  return (
    <div className=" absolute top-0 left-0 h-full w-full p-8 flex justify-between flex-col ">
      <h2 className=" bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-bold">
        {props.id+1}
      </h2>
      <div>
        <p className="text-xl leading-normal text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed impedit
          quae quasi optio doloremque recusandae?
        </p>
        <br />
        <div className="flex justify-between">
          <button className="bg-blue-200 font-semibold rounded-full w-24 p-1 text-lg">
            {props.tag}
          </button>
          <button className="bg-blue-200 font-semibold rounded-full px-4 py-2  text-lg">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
