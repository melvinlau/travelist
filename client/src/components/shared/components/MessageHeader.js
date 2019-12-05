import React, { useState, useContext } from "react";

function MessageHeader({ name, message, image, destination }) {
  //   if (name) {
  //   greeting = `Hi ${name}!`
  // }

  return (
    <div className="col-12 d-flex justify-content-center flex-column align-items-center pb-2">
      <img src={image} style={{ height: "120px" }} />
      <h3 className="mt-2 text-center">
        {name ? `Hi ${name}!` : ""}
        {destination ? `${destination}, huh?` : ""}
        {(name || destination) ? <br /> : '' }
        <strong>{message}</strong>
      </h3>
    </div>
  );
}

export default MessageHeader;
