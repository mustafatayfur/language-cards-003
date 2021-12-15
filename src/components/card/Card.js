/** @format */

import React, { useState } from "react";
import Frontcard from "./Frontcard";
import Info from "./Info";

export default function Card({ name, img, options }) {
  const [isVisible, setIsvisible] = useState(true);
  return (
    <>
      <div key={name} className='card' onClick={() => setIsvisible(!isVisible)}>
        {isVisible ? (
          <Frontcard name={name} img={img} />
        ) : (
          <Info options={options} />
        )}
      </div>
    </>
  );
}

