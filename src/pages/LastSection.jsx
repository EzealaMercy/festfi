// import React from 'react'

import { Data } from "./Data";

const LastSection = () => {
  return (
    <div className="mt-8 mx-4 md:mt-10 md:mx-10">
      <h2 className="text-xl font-bold">Discover more communities</h2>
      {Data.map((event) => (
        <div key={event.id} className="flex flex-row mt-8 w-full">
          <img
            src={event.image}
            alt="Event"
            className="w-40 h-40 border-2 p-3 border-gray-300 rounded-md object-cover"
          />
          <div className="ml-6 mt-7 w-full">
            <h1 className="text-xl font-bold pb-2">{event.name}</h1>
            <p className="text-md font-medium text-gray-500 pb-2">
              {event.members_number}
            </p>
            <div className="flex mb-5 -space-x-4">
              {event.members_picture.map((picture, index) => (
                <div className="" key={index}>
                  <img
                    className="w-10 h-10 border-2 border-white rounded-full"
                    src={picture}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastSection;
