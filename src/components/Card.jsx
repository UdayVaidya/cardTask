import React from "react";
import { useState } from "react";

const Card = (props) => {
  const [active, setActive] = useState(false);
  return (
    <div
      style={{ backgroundColor: props.cardBg }}
      className="relative w-full max-w-120 min-h-140 rounded-3xl overflow-hidden pt-52 border-2 border-gray-300 shadow-lg bg-white  hover:border-blue-500 transition-all duration-300"
    >
      {/* Background Image */}
      <img
        src={props.bgSource}
        alt="bg"
        className="absolute top-0 left-0 p-2 rounded-tl-3xl rounded-tr-3xl h-45 w-full object-cover"
      />

      {/* Ground Row */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 flex items-center gap-20">
        {/* Star */}
        <button
          onClick={() => setActive(!active)}
          className={`text-3xl ${active ? "text-yellow-400" : "text-gray-400"}`}
        >
          {active ? "★" : "☆"}
        </button>

        {/* Profile */}
        <div className="-translate-y-6 h-25 w-25 rounded-full border-4 border-white overflow-hidden bg-white">
          <img
            src={props.profileSource}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Dots */}
        <button className="text-4xl text-gray-600 hover:text-black">…</button>
      </div>

      {/* Card Content (NOW behaves correctly) */}
      <div className="mt-6 p-6 text-center">
        <h2 className="text-4xl font-bold mb-2">{props.userName}</h2>
        <h2 className="text-2xl  mb-2">{props.realName}</h2>
        <p className="text-gray-700 italic">{props.userDescription}</p>
      </div>

      <div className="mx-auto my-6 w-1/2 h-px bg-gray-600"></div>

      <div className="flex justify-around text-center mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-1">{props.mediaCount}</h2>
          <h5 className="italic text-xl text-gray-700">Media</h5>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-1">{props.followerCount}</h2>
          <h5 className="italic text-xl text-gray-700">Followers</h5>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-1">{props.followingCount}</h2>
          <h5 className="italic text-xl text-gray-700">following</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
